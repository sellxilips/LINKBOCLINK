// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCPm2a7B5wm2SS7MOzDmLrIIRMLg5H33BA",
  authDomain: "linkproject-7c67e.firebaseapp.com",
  projectId: "linkproject-7c67e",
  storageBucket: "linkproject-7c67e.appspot.com",
  messagingSenderId: "438025814106",
  appId: "1:438025814106:web:94e90a8ba86e3c25c89863"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
