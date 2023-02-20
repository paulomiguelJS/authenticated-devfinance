import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPoLue7hIiJsHPPVYjVNLwsEm5Ydtylpc",
  authDomain: "financial-manager-f1f94.firebaseapp.com",
  projectId: "financial-manager-f1f94",
  storageBucket: "financial-manager-f1f94.appspot.com",
  messagingSenderId: "630207143448",
  appId: "1:630207143448:web:fe8fdc4f5f1f9a85836d6d",
  measurementId: "G-DQRCLLFTW4",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
