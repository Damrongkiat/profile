// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQcCu7h7T7Pe_TPQyQ_lHHTJCHuxN96E",
  authDomain: "test-7c15b.firebaseapp.com",
  databaseURL:
    "https://test-7c15b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-7c15b",
  storageBucket: "test-7c15b.appspot.com",
  messagingSenderId: "535021174184",
  appId: "1:535021174184:web:4400b25ea909042fe7719d",
  measurementId: "G-57J0LG5QCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
