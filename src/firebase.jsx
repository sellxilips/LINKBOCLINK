// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBw3EqU2-hd_U39wHYK1KaGx2YryWDz2ZA",
  authDomain: "linkproject-26630.firebaseapp.com",
  projectId: "linkproject-26630",
  storageBucket: "linkproject-26630.appspot.com",
  messagingSenderId: "1035797642788",
  appId: "1:1035797642788:web:23bd1dc02f0ee73813e2b1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
