import { useEffect, useState } from 'react';
import { ensureShiftsForNextDays } from '../services/ShiftScheduler';

/**
 * Componente che si occupa di controllare e inizializzare gli shift all'avvio dell'applicazione
 * Non renderizza alcun elemento visibile, viene utilizzato solo per il suo effetto
 */
const ShiftInitializer = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Esegui il controllo e l'inizializzazione degli shift solo una volta all'avvio
    if (!isInitialized) {
      // Aggiungi un piccolo ritardo per non bloccare il rendering iniziale
      const timer = setTimeout(() => {
        console.log('Controllo degli shift all\'avvio dell\'applicazione...');
        
        ensureShiftsForNextDays(30)
          .then(() => {
            console.log('Controllo degli shift completato con successo');
            setIsInitialized(true);
          })
          .catch((error) => {
            console.error('Errore durante il controllo degli shift all\'avvio:', error);
            setIsInitialized(true); // Imposta comunque come inizializzato per evitare tentativi ripetuti
          });
      }, 2000); // Ritardo di 2 secondi per consentire il caricamento dell'app

      return () => clearTimeout(timer);
    }
  }, [isInitialized]);

  // Il componente non renderizza nulla di visibile
  return null;
};

export default ShiftInitializer; 