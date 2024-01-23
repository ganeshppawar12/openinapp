// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLixHFVuEZ2R4iefS7Mj5XB8sNsH74KIg",
  authDomain: "openinautho.firebaseapp.com",
  projectId: "openinautho",
  storageBucket: "openinautho.appspot.com",
  messagingSenderId: "738812408851",
  appId: "1:738812408851:web:1f0f57758564232504bbe6",
  measurementId: "G-EZZ4ZTRMTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;