
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4qn15sgeHMMZ1HXwA0TyR2lVZbx7XBh8",
    authDomain: "proyecto-pruebas-71a4e.firebaseapp.com",
    projectId: "proyecto-pruebas-71a4e",
    storageBucket: "proyecto-pruebas-71a4e.firebasestorage.app",
    messagingSenderId: "696819749762",
    appId: "1:696819749762:web:9b11baddcdc193becfb59b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
