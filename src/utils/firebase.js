// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHIlwnmKPS7-6WKuR5-tsNH4YXCiJE0Ek",
  authDomain: "netflix-79d32.firebaseapp.com",
  projectId: "netflix-79d32",
  storageBucket: "netflix-79d32.appspot.com",
  messagingSenderId: "28732942773",
  appId: "1:28732942773:web:4f679b59ddfca69b4c11fc",
  measurementId: "G-WZRN5M7JJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();