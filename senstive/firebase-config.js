import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD1AouPxpWcnBel0K_X81drpT5gG7-IR1I",
    authDomain: "restaurant-casher.firebaseapp.com",
    projectId: "restaurant-casher",
    storageBucket: "restaurant-casher.appspot.com",
    messagingSenderId: "1043607858011",
    appId: "1:1043607858011:web:3256bc04d8bd4b01c4487e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);