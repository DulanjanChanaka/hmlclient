import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb3auB4SI7HiG26YkheRWqzt4NvtMxPws",
    authDomain: "caltexauth.firebaseapp.com",
    projectId: "caltexauth",
    storageBucket: "caltexauth.appspot.com",
    messagingSenderId: "369187015739",
    appId: "1:369187015739:web:d3a309ad062f3b411d601e"
  };

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
const auth = getAuth(app);

export { db, auth };