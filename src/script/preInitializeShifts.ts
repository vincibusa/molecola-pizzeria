import { initializeShiftsForDate } from "../services/Reservation";
import { addDays, format } from "date-fns";

async function preInitializeShifts() {
  const today = new Date();
  // Inizializza gli shift per i prossimi 30 giorni
  for (let i = 0; i < 30; i++) {
    const date = addDays(today, i);
    const formattedDate = format(date, "yyyy-MM-dd");
    await initializeShiftsForDate(formattedDate);
    console.log(`Shifts initialized for ${formattedDate}`);
  }
}

preInitializeShifts().catch(console.error);