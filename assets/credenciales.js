// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCRnKSOf-pocY-dcG6P2yZmke82ZPWfXA",
  authDomain: "saveyou-app.firebaseapp.com",
  projectId: "saveyou-app",
  storageBucket: "saveyou-app.appspot.com",
  messagingSenderId: "345888166974",
  appId: "1:345888166974:web:d8657b1431bd86dbbd6d6f",
  measurementId: "G-D1G29FQPTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);