import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCbiHzkWlZiej_2Mxh81Gpxr2r-dXmWXPk",
    authDomain: "playdatatalk-9ca66.firebaseapp.com",
    projectId: "playdatatalk-9ca66",
    storageBucket: "playdatatalk-9ca66.appspot.com",
    messagingSenderId: "989090028421",
    appId: "1:989090028421:web:7dd6a39b4705366b1a02ec"
};
const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();

