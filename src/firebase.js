import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpmObXpod_KrmN9AvW_Nau8KIFURsmtwA",
  authDomain: "rv-shop-524ed.firebaseapp.com",
  projectId: "rv-shop-524ed",
  storageBucket: "rv-shop-524ed.appspot.com",
  messagingSenderId: "297359874256",
  appId: "1:297359874256:web:6784ef8e5c069eabe026d5",
  measurementId: "G-EE1W196H8E",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
