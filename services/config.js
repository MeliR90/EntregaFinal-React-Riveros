import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAZw_Tcl4xXdqFLg1cPCrmp3aUlZRQnU24",
  authDomain: "donmate-26c00.firebaseapp.com",
  projectId: "donmate-26c00",
  storageBucket: "donmate-26c00.appspot.com",
  messagingSenderId: "179078123802",
  appId: "1:179078123802:web:0269bfbfc853b44e5cdca3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);