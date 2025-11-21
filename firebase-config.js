// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJJYUOM8EBEuT39DX2F_HtxgEbHDRH-Zc",
  authDomain: "deanzahacks11-21-2025.firebaseapp.com",
  projectId: "deanzahacks11-21-2025",
  storageBucket: "deanzahacks11-21-2025.firebasestorage.app",
  messagingSenderId: "253702257130",
  appId: "1:253702257130:web:9ea8e3ee1bd291f1801a93",
  measurementId: "G-5B84R81S31"
};

// Initialize Firebase (optional)
export const app = initializeApp(firebaseConfig);

// Export config so app.js can import it
export default firebaseConfig;