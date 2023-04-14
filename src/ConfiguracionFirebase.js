import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChSggMbID5Hj4f-oheVA6lS2Vt1YPpNRE",
    authDomain: "database-26fe8.firebaseapp.com",
    databaseURL: "https://database-26fe8-default-rtdb.firebaseio.com",
    projectId: "database-26fe8",
    storageBucket: "database-26fe8.appspot.com",
    messagingSenderId: "588848526092",
    appId: "1:588848526092:web:18ff79711c7b111ee54f29",
    measurementId: "G-QWXWS2G06K"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();