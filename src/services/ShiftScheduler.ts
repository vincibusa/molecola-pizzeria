import { database } from '../firebase-config';
import { addDays, format } from 'date-fns';
import { initializeShiftsForDate, Shift } from './Reservation';

// Import condizionale di node-cron solo in ambiente server
let cron: any;
try {
  // Verifica se siamo in un ambiente Node.js (server)
  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    cron = require('node-cron');
  }
} catch (error) {
  console.log('node-cron non disponibile, funzionalità di scheduling disabilitate');
}

/**
 * Controlla se esistono shift per un determinato giorno nel database
 * @param date Data nel formato YYYY-MM-DD
 * @returns Promise<boolean> True se esistono shift per la data specificata
 */
export const checkShiftsExistForDate = async (date: string): Promise<boolean> => {
  try {
    const shiftsRef = database.ref(`shifts/${date}`);
    const snapshot = await shiftsRef.once('value');
    return snapshot.exists();
  } catch (error) {
    console.error(`Errore durante il controllo degli shift per la data ${date}:`, error);
    return false;
  }
};

/**
 * Controlla e inizializza gli shift per i prossimi N giorni se non esistono già
 * @param days Numero di giorni per cui controllare/inizializzare gli shift (default: 30)
 * @returns Promise<void>
 */
export const ensureShiftsForNextDays = async (days: number = 30): Promise<void> => {
  try {
    const today = new Date();
    console.log(`Controllo degli shift per i prossimi ${days} giorni...`);
    
    // Controlla ogni giorno nei prossimi N giorni
    for (let i = 0; i < days; i++) {
      const date = addDays(today, i);
      const formattedDate = format(date, 'yyyy-MM-dd');
      
      // Verifica se esistono già shift per questa data
      const shiftsExist = await checkShiftsExistForDate(formattedDate);
      
      if (!shiftsExist) {
        // Se non esistono, inizializza gli shift per questa data
        console.log(`Inizializzazione degli shift per ${formattedDate}`);
        await initializeShiftsForDate(formattedDate);
      } else {
        console.log(`Gli shift per ${formattedDate} esistono già`);
      }
    }
    
    console.log('Controllo e inizializzazione degli shift completati con successo');
  } catch (error) {
    console.error('Errore durante il controllo/inizializzazione degli shift:', error);
    throw error;
  }
};

/**
 * Configura un job cron per verificare automaticamente gli shift mancanti
 * Esegue il controllo una volta al giorno alle 00:05
 * NOTA: Questa funzione è disponibile solo in ambiente server
 * @returns La funzione per fermare il job cron o null se non è possibile configurarlo
 */
export const setupAutomaticShiftChecker = () => {
  // Se cron non è disponibile (siamo in un browser), restituisci null
  if (!cron) {
    console.warn('node-cron non disponibile, impossibile configurare il job automatico');
    // Esegui comunque un controllo immediato per l'interfaccia utente
    ensureShiftsForNextDays(30).catch(error => {
      console.error('Errore durante il controllo iniziale degli shift:', error);
    });
    return null;
  }
  
  // Configura il job per eseguirsi ogni giorno alle 00:05
  const job = cron.schedule('5 0 * * *', async () => {
    console.log('Esecuzione del controllo automatico degli shift...');
    try {
      await ensureShiftsForNextDays(30);
      console.log('Controllo automatico degli shift completato con successo');
    } catch (error) {
      console.error('Errore durante il controllo automatico degli shift:', error);
    }
  });
  
  console.log('Job di controllo automatico degli shift configurato.');
  
  // Esegue immediatamente un controllo all'avvio
  ensureShiftsForNextDays(30).catch(error => {
    console.error('Errore durante il controllo iniziale degli shift:', error);
  });
  
  // Restituisce una funzione per fermare il job se necessario
  return () => {
    job.stop();
    console.log('Job di controllo automatico degli shift fermato.');
  };
}; 