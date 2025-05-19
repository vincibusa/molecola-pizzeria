import { ensureShiftsForNextDays } from "../services/ShiftScheduler";

async function preInitializeShifts() {
  // Verifica e inizializza gli shift per i prossimi 30 giorni
  await ensureShiftsForNextDays(30);
  console.log("Processo di verifica e inizializzazione degli shift completato.");
}

preInitializeShifts().catch(console.error);