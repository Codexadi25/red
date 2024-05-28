// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvuHIB5cT1XNUu2lWnPI8EhjYtqvzqzQw",
  authDomain: "coded-love.firebaseapp.com",
  projectId: "coded-love",
  storageBucket: "coded-love.appspot.com",
  messagingSenderId: "1078625979387",
  appId: "1:1078625979387:web:4ec27c43bf2a09029a195e",
  measurementId: "G-8EJ0EEVZXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);