import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjruVb4Av7V5prkQuxlIZGoSYMHgPK-Tc",
  authDomain: "leah-s-six-birthday.firebaseapp.com",
  projectId: "leah-s-six-birthday",
  storageBucket: "leah-s-six-birthday.firebasestorage.app",
  messagingSenderId: "221884344257",
  appId: "1:221884344257:web:7d1ec5bd05b4bfcdcb3140"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Ensure Firestore is initialized

export { db };

export default app;