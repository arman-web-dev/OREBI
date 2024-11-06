// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBehOq6rEYnQeTeCTYeMrFlPvVRyklOwU4",
  authDomain: "orebi-by-arman.firebaseapp.com",
  projectId: "orebi-by-arman",
  storageBucket: "orebi-by-arman.firebasestorage.app",
  messagingSenderId: "442442254024",
  appId: "1:442442254024:web:420296f9506b58b4ff87fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;