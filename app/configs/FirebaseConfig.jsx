// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ai-logo-generator-4dd22.firebaseapp.com",
    projectId: "ai-logo-generator-4dd22",
    storageBucket: "ai-logo-generator-4dd22.firebasestorage.app",
    messagingSenderId: "1042735946078",
    appId: "1:1042735946078:web:99e08207756518bf2b97cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);