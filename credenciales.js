// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAftbfpjDj3Ul4Gul9Ci2FMLa2eS5D1NPY",
  authDomain: "aguaviva-expo.firebaseapp.com",
  projectId: "aguaviva-expo",
  storageBucket: "aguaviva-expo.firebasestorage.app",
  messagingSenderId: "1033673803523",
  appId: "1:1033673803523:web:a97de6dd5b82194ace8b36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
