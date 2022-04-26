// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRc5xKHfvXssy7C0Dtf2lF2f3AiLZWyW8",
    authDomain: "reactjs-coder.firebaseapp.com",
    projectId: "reactjs-coder",
    storageBucket: "reactjs-coder.appspot.com",
    messagingSenderId: "51645862533",
    appId: "1:51645862533:web:939b0520132e7cfe43cfec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);