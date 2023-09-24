// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXAWrqb-JdyeIz6zgXzEAoL6ts6IQRkyU",
  authDomain: "its-e-learning-5da4c.firebaseapp.com",
  projectId: "its-e-learning-5da4c",
  storageBucket: "its-e-learning-5da4c.appspot.com",
  messagingSenderId: "997200791852",
  appId: "1:997200791852:web:375d30b6bd75b1a4018489"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);