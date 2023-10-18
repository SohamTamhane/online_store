import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0CuQRZo8Myie0f2hkkq6eBjNTTT0Ykqc",
    authDomain: "dhanaraj-new.firebaseapp.com",
    projectId: "dhanaraj-new",
    storageBucket: "dhanaraj-new.appspot.com",
    messagingSenderId: "283939517433",
    appId: "1:283939517433:web:01483fcd52d294e31b4328",
    measurementId: "G-XQD7KH0MW4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);