// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJYUOM8EBEuT39DX2F_HtxgEbHDRH-Zc",
  authDomain: "deanzahacks11-21-2025.firebaseapp.com",
  projectId: "deanzahacks11-21-2025",
  storageBucket: "deanzahacks11-21-2025.firebasestorage.app",
  messagingSenderId: "253702257130",
  appId: "1:253702257130:web:9ea8e3ee1bd291f1801a93",
  measurementId: "G-5B84R81S31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);