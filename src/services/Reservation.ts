import { database } from '../firebase-config';


export interface Reservation {
  id?: string;
  fullName: string;
  phone: string;
  date: string;   // formato "YYYY-MM-DD"
  time: string;   // formato "HH:mm" (es. "19:00", "19:30", ecc.)
  seats: number;
  specialRequests?: string;
  status: 'pending' | 'accepted' | 'rejected';  // nuovo campo per lo stato
  email: string;  // nuovo campo per l'email
}

export interface Shift {
  time: string;           // Es. "19:00", "20:00", ecc.
  enabled: boolean;       // Indica se il turno è attivo (sbloccato) oppure no
  maxReservations: number; // Numero massimo di posti prenotabili (default 15)
}

// Array costante con tutti gli orari desiderati
export const allTimes = [
  "19:00", "19:15", "19:30", "19:45", 
  "20:00", "20:15", "20:30", "20:45", 
  "21:00", "21:15", "21:30", "21:45",
  "22:00", "22:15", "22:30", "22:45",
  "23:00", 
];

/**
 * Inizializza gli shift di default per una data specifica.
 * Per ogni orario in allTimes crea uno Shift; di default vengono abilitati tutti gli orari.
 */
export const initializeShiftsForDate = async (date: string): Promise<void> => {
  const shiftsRef = database.ref(`shifts/${date}`);
  const defaultShifts: Shift[] = allTimes.map((time) => {
    // Tutti gli orari sono abilitati di default
    return { time, enabled: true, maxReservations: 100 };
  });
  for (const shift of defaultShifts) {
    await shiftsRef.child(shift.time).set(shift);
  }
};

/**
 * Aggiorna le impostazioni di un turno per una data specifica.
 */
export const updateShift = async (
  date: string,
  time: string,
  shift: Partial<Shift>
): Promise<void> => {
  const shiftRef = database.ref(`shifts/${date}/${time}`);
  await shiftRef.update(shift);
};

/**
 * Recupera tutti gli shift per una data specifica.
 */
export const getShiftsForDate = async (date: string): Promise<Shift[]> => {
  const shiftsRef = database.ref(`shifts/${date}`);
  const snapshot = await shiftsRef.once('value');
  const shifts: Shift[] = [];
  snapshot.forEach((childSnapshot: any) => {
    shifts.push(childSnapshot.val());
  });
  return shifts;
};

// Limite massimo globale di posti per ogni orario (opzionale, impostabile)
const MAX_SEATS_PER_TIME_SLOT = 100; // Puoi modificare questo valore o renderlo configurabile

/**
 * Aggiunge una prenotazione senza dipendere dagli shifts.
 * Opzionalmente controlla il limite massimo di posti per orario.
 */
export const addReservation = async (reservation: Reservation): Promise<string | null> => {
  try {
    // Verifica che l'orario sia valido (facoltativo)
    if (!allTimes.includes(reservation.time)) {
      throw new Error('Orario non valido');
    }

    // Opzionale: controlla il limite massimo di posti per questo orario
    if (MAX_SEATS_PER_TIME_SLOT > 0) {
      const reservationsRef = database.ref('reservations');
      const snapshot = await reservationsRef.orderByChild('date').equalTo(reservation.date).once('value');
      let totalSeats = 0;
             snapshot.forEach((childSnapshot: any) => {
         const res: Reservation = childSnapshot.val();
         if (res.time === reservation.time && res.status !== 'rejected') {
           totalSeats += res.seats;
         }
       });

      // Se superiamo il limite globale, genera un errore
      if (totalSeats + reservation.seats > MAX_SEATS_PER_TIME_SLOT) {
        throw new Error('Orario al completo');
      }
    }

    // Aggiunge la prenotazione con stato pending di default
    const reservationsRef = database.ref('reservations');
    const newReservationRef = reservationsRef.push();
    await newReservationRef.set({ ...reservation, status: 'pending' });
    return newReservationRef.key;
  } catch (error) {
    console.error('Errore durante l\'aggiunta della prenotazione: ', error);
    throw error;
  }
};

/**
 * Sottoscrizione in tempo reale alle prenotazioni.
 */
export const subscribeToReservations = (
  callback: (reservations: Reservation[]) => void
): (() => void) => {
  const reservationsRef = database.ref('reservations');
  const listener = reservationsRef.on('value', (snapshot: any) => {
    const reservations: Reservation[] = [];
    snapshot.forEach((childSnapshot: any) => {
      const reservation: Reservation = childSnapshot.val();
      reservation.id = childSnapshot.key ?? "";
      reservations.push(reservation);
    });
    callback(reservations);
  });
  return () => {
    reservationsRef.off('value', listener);
  };
};

/**
 * Aggiorna una prenotazione esistente.
 */
export const updateReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update(reservation);
  } catch (error) {
    console.error('Errore durante l\'aggiornamento della prenotazione: ', error);
    throw error;
  }
};

/**
 * Elimina una prenotazione dato il suo key.
 */
export const deleteReservation = async (key: string): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.remove();
  } catch (error) {
    console.error('Errore durante l\'eliminazione della prenotazione: ', error);
    throw error;
  }
};

/**
 * Accetta una prenotazione e invia email di conferma
 */
export const acceptReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update({ ...reservation, status: 'accepted' });
  } catch (error) {
    console.error('Errore durante l\'accettazione della prenotazione: ', error);
    throw error;
  }
};

/**
 * Rifiuta una prenotazione
 */
export const rejectReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update({ ...reservation, status: 'rejected' });
  } catch (error) {
    console.error('Errore durante il rifiuto della prenotazione: ', error);
    throw error;
  }
};