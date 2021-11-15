// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import { GoogleAuthProvider, getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEyaTRYFmd8h0aL3t8OXU7e3Hj0hknoVQ",
  authDomain: "uber-cloned.firebaseapp.com",
  projectId: "uber-cloned",
  storageBucket: "uber-cloned.appspot.com",
  messagingSenderId: "469987713400",
  appId: "1:469987713400:web:6ef6e709fd0915f683e88d",
  measurementId: "G-FHNSBFXFFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, provider, auth}