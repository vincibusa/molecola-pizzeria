/**
 * Script per la gestione automatica degli shift con node-cron.
 * Questo script è progettato per essere eseguito nel server Node.js.
 * 
 * Per eseguirlo manualmente: npm run shift-scheduler
 * Per eseguirlo in produzione con PM2: pm2 start npm --name "shift-scheduler" -- run shift-scheduler
 */

import { setupAutomaticShiftChecker } from "../services/ShiftScheduler";

console.log("Avvio dello scheduler degli shift...");

// Configura il job automatico di controllo degli shift
const stopShiftChecker = setupAutomaticShiftChecker();

// Gestisce la chiusura pulita del programma
process.on('SIGINT', () => {
  console.log('\nChiusura del programma...');
  if (stopShiftChecker) {
    stopShiftChecker();
  }
  process.exit(0);
});

console.log("Lo scheduler degli shift è in esecuzione. Premi CTRL+C per terminare."); 