import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWVBOHiwq3WbJzpohdvsLxW3ckG23E6Jc",
  authDomain: "rule-of-thumb-45bf3.firebaseapp.com",
  projectId: "rule-of-thumb-45bf3",
  storageBucket: "rule-of-thumb-45bf3.appspot.com",
  messagingSenderId: "1059817453297",
  appId: "1:1059817453297:web:dd31befdb6c0f7597e9b50",
  measurementId: "G-5VLYXWL5Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);