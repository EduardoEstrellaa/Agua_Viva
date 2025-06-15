// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAftbfpjDj3Ul4Gul9Ci2FMLa2eS5D1NPY",
  authDomain: "aguaviva-expo.firebaseapp.com",
  projectId: "aguaviva-expo",
  storageBucket: "aguaviva-expo.firebasestorage.app",
  messagingSenderId: "1033673803523",
  appId: "1:1033673803523:web:a97de6dd5b82194ace8b36",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);