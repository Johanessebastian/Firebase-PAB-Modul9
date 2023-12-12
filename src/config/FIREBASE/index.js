import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCtMM9jb9QR3zTmI_KzHJfyRSja5Pan-oQ",
  authDomain: "notes2-c4a1e.firebaseapp.com",
  databaseURL: "https://notes2-c4a1e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notes2-c4a1e",
  storageBucket: "notes2-c4a1e.appspot.com",
  messagingSenderId: "125087934124",
  appId: "1:125087934124:web:46ca5a791ce9f44e1e6109"
});

const FIREBASE = firebase;

export default FIREBASE;