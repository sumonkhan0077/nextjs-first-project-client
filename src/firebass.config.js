// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwdsz8O9b_IB4oHHdc275J4D8EcGjnEbs",
  authDomain: "next-project-ee7c6.firebaseapp.com",
  projectId: "next-project-ee7c6",
  storageBucket: "next-project-ee7c6.firebasestorage.app",
  messagingSenderId: "693528634010",
  appId: "1:693528634010:web:01484c16675b7fdd4e7523",
};

// Initialize Firebase (MUST COME FIRST)
export const app = initializeApp(firebaseConfig);

// Initialize Auth AFTER app
export const auth = getAuth(app);
