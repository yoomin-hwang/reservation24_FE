// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC79TYQn_PJ4v4XgDsKO8VfEMj1RjQI0TA",
  authDomain: "roomreservation24.firebaseapp.com",
  projectId: "roomreservation24",
  storageBucket: "roomreservation24.appspot.com",
  messagingSenderId: "903141169729",
  appId: "1:903141169729:web:de1a5e34431a9c69a804c0",
  measurementId: "G-BM18Q8M772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);