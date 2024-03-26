// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9a12e.firebaseapp.com",
  projectId: "mern-blog-9a12e",
  storageBucket: "mern-blog-9a12e.appspot.com",
  messagingSenderId: "604182488992",
  appId: "1:604182488992:web:74046e5c9e902ae437e6c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
