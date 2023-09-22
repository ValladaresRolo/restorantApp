// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBm-BFc39QImdoaoLlLItGiQtVhRCfSUTw",
    authDomain: "menurestorantreact.firebaseapp.com",
    projectId: "menurestorantreact",
    storageBucket: "menurestorantreact.appspot.com",
    messagingSenderId: "87164553105",
    appId: "1:87164553105:web:0dba10ea1f09b720503c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);