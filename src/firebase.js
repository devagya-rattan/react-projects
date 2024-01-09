// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3aatp39wm8DJ3bOJkD8e-5zUhLClOQ_A",
  authDomain: "auth-a780e.firebaseapp.com",
  projectId: "auth-a780e",
  storageBucket: "auth-a780e.appspot.com",
  messagingSenderId: "748631903870",
  appId: "1:748631903870:web:4a666fd761010165f7d22f",
  measurementId: "G-K243WSHDBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)