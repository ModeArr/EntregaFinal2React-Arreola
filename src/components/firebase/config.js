import { initializeApp } from "firebase/app";
import{ getFirestore, collection } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDtYxWERwfIzegQ-DN1Oj3j6kqWB72WaY",
  authDomain: "tienda-mastergym.firebaseapp.com",
  projectId: "tienda-mastergym",
  storageBucket: "tienda-mastergym.appspot.com",
  messagingSenderId: "82206531551",
  appId: "1:82206531551:web:dfc391de4f30b32c212e6a",
  measurementId: "G-TWQBW2PD6X"
};

const app = initializeApp(firebaseConfig);

// init service
export const db = getFirestore()

//collection ref
export const colRef = collection(db, 'producto')
export const colRefCat = collection(db, 'categorias')
export const colRefOrder = collection(db, 'ordenes')

//sotrage
export const storage = getStorage(app);

//auth
export const auth = getAuth(app);