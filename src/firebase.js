import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVZ7g1Y8EwJNydk1nQpxp2YI8K4aLpE5U",
  authDomain: "facebook-clone-20387.firebaseapp.com",
  projectId: "facebook-clone-20387",
  storageBucket: "facebook-clone-20387.appspot.com",
  messagingSenderId: "870791728797",
  appId: "1:870791728797:web:d7bddb9508d1b7cb990e74"
};

const app       = initializeApp(firebaseConfig);

const auth      = getAuth();
const provider  = new GoogleAuthProvider();

const db        = getFirestore();
const storage   = getStorage();
const timestamp = serverTimestamp();

export { app, auth, provider, db, storage, timestamp };