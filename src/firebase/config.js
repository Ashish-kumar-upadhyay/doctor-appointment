import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  CACHE_SIZE_UNLIMITED,
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
 
    apiKey: "AIzaSyB8FgW7UPSKmYhBOyYqYErOXK7MJj3Bwi4",
    authDomain: "doctor-4d363.firebaseapp.com",
    databaseURL: "https://doctor-4d363-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "doctor-4d363",
    storageBucket: "doctor-4d363.firebasestorage.app",
    messagingSenderId: "708921601137",
    appId: "1:708921601137:web:0a11fc2a41253301c8bfd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore with persistence
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentSingleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED,
  }),
});

// Configure Google Provider with additional parameters
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export {
  auth,
  googleProvider,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  db,
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
};
