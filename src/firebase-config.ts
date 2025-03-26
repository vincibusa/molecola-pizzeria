import firebase from 'firebase/compat/app';
import 'firebase/compat/database'; // Importa solo il modulo per il Realtime Database

// Configura Firebase solo con ciò che serve (rimuovo identity toolkit)
const firebaseConfig = {
  apiKey: "AIzaSyD6xAlpSbs--5sq48JDWVMZlee_gndU3Hg",
  databaseURL: "https://molecola-pizzeria-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "molecola-pizzeria",
  storageBucket: "molecola-pizzeria.appspot.com",
  messagingSenderId: "720187459935",
  appId: "1:720187459935:web:42f3a01d1fa5fb71deceea"
};

// Inizializza Firebase
let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app(); // Usa l'istanza esistente di Firebase
}

// Esporta solo ciò che serve
export const database = firebase.database();