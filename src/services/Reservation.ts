import { database } from '../firebase-config';

export interface Reservation {
    id?: string;
    fullName: string;
    phone: string;
    date: string;
    time: string;
    seats: number;
    specialRequests?: string;
}

export const addReservation = async (reservation: Reservation): Promise<string | null> => {
  try {
    const reservationsRef = database.ref('reservations');
    const newReservationRef = reservationsRef.push();
    await newReservationRef.set(reservation);
    return newReservationRef.key;
  } catch (error) {
    console.error('Error adding reservation: ', error);
    throw error;
  }
};

export const getReservations = async (): Promise<Reservation[]> => {
  try {
    const reservationsRef = database.ref('reservations');
    const snapshot = await reservationsRef.get();
    const reservations: Reservation[] = [];
    snapshot.forEach((childSnapshot) => {
      const reservation: Reservation = childSnapshot.val();
      reservation.id = childSnapshot.key;
      reservations.push(reservation);
    });
    return reservations;
  } catch (error) {
    console.error('Error getting reservations: ', error);
    throw error;
  }
};

export const deleteReservation = async (key: string): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.remove();
  } catch (error) {
    console.error('Error deleting reservation: ', error);
    throw error;
  }
};

export const updateReservation = async (key: string, reservation: Reservation): Promise<void> => {
  try {
    const reservationRef = database.ref(`reservations/${key}`);
    await reservationRef.update(reservation);
  } catch (error) {
    console.error('Error updating reservation: ', error);
    throw error;
  }
};