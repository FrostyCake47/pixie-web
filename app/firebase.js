// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnJsFnWholaKmzRB273zBLGt8aUVlE7IM",
  authDomain: "pixie-0.firebaseapp.com",
  projectId: "pixie-0",
  storageBucket: "pixie-0.appspot.com",
  messagingSenderId: "375385385152",
  appId: "1:375385385152:web:53f0bbe515718765b5a525",
  measurementId: "G-ZD5JM8FFZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);