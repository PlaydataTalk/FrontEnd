import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAAm1ejAHBpaC0o5JMd9MO57mAE4Euszhk",
    authDomain: "playdatatalk.firebaseapp.com",
    projectId: "playdatatalk",
    databaseURL: "https://playdatatalk-default-rtdb.firebaseio.com/",
    storageBucket: "playdatatalk.appspot.com",
    messagingSenderId: "957807197538",
    appId: "1:957807197538:web:fafd94b0fe3db9021c003b"
};
const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();

