import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBaQNblsikvNXFNOcPWe18df4zPGIrdrA",
  authDomain: "swpssm2.firebaseapp.com",
  projectId: "swpssm2",
  storageBucket: "swpssm2.appspot.com",
  messagingSenderId: "405521605660",
  appId: "1:405521605660:web:9a46fed1961ac9507aebd9",
  measurementId: "G-P1M7J04B00"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;