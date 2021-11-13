import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA6JEc0MU26-6xZN24_QwRZh793Wg5vlY",
  authDomain: "sysgym-e0494.firebaseapp.com",
  projectId: "sysgym-e0494",
  storageBucket: "sysgym-e0494.appspot.com",
  messagingSenderId: "1051736172521",
  appId: "1:1051736172521:web:975e03647614c5fee74d78"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const auth = fb.auth();
export const db = fb.firestore();
export const storage = fb.storage();
