// src/services/authService.ts
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Assicurati che Firebase sia già inizializzato nel tuo progetto
const auth = firebase.auth();

/**
 * Esegue il login di un utente esistente con email e password.
 * @param email - Email dell'utente.
 * @param password - Password dell'utente.
 * @returns Una Promise che risolve con l'oggetto utente se il login ha successo.
 */
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default signIn;