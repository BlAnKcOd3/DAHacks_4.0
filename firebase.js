// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxpQK0Y2Zjur3e5zVATZCDugRs75iUz1E",
  authDomain: "deanzahacks4.firebaseapp.com",
  projectId: "deanzahacks4",
  storageBucket: "deanzahacks4.firebasestorage.app",
  messagingSenderId: "535064535574",
  appId: "1:535064535574:web:1d6d1ebaec3c1938fb8b37",
  measurementId: "G-R6GL0BNH14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);