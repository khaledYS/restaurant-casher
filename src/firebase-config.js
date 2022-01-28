import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore";


// TODO: you should replace this with your own api key.
const firebaseConfig = {
    apiKey: "AIzaSyD1AouPxpWcnBel0K_X81drpT5gG7-IR1I",
    appId: "1:1043607858011:web:3256bc04d8bd4b01c4487e",
    authDomain: "restaurant-casher.firebaseapp.com",
    messagingSenderId: "1043607858011",
    projectId: "restaurant-casher",
    storageBucket: "restaurant-casher.appspot.com"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);