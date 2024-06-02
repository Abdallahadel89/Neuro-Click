import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from'firebase/auth'
import {getFirestore} from'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAvRxsN-n3msl2sdTFr6ZHXGjIrTKTspuo",
  authDomain: "gptest-60e23.firebaseapp.com",
  projectId: "gptest-60e23",
  storageBucket: "gptest-60e23.appspot.com",
  messagingSenderId: "288357428563",
  appId: "1:288357428563:web:514e51020b53e0b0f845a6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
  export const GoogleProvider = new GoogleAuthProvider()


export const db = getFirestore(app)
