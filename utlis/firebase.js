// Import the functions you need from the SDKs you need

import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAF_UytYFt9S5O2w7OM75Du5q1m6W-D9-A",

    authDomain: "themes-editor.firebaseapp.com",
  
    projectId: "themes-editor",
  
    storageBucket: "themes-editor.appspot.com",
  
    messagingSenderId: "627352680003",
  
    appId: "1:627352680003:web:2865af7df940faafb8c6f6"
  
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();

export { app, db };
