  // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC04t3Vm-OTesLnMW50fTgkWpA0L1hYMmo",
    authDomain: "twitter-clone-e2dac.firebaseapp.com",
    projectId: "twitter-clone-e2dac",
    storageBucket: "twitter-clone-e2dac.appspot.com",
    messagingSenderId: "58643680489",
    appId: "1:58643680489:web:d6da7ecd017395150f3478"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };