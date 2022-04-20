
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_4708hjmjurPu4izuioDrI_FtjueitMA",
  authDomain: "firedrive-f1b50.firebaseapp.com",
  projectId: "firedrive-f1b50",
  storageBucket: "firedrive-f1b50.appspot.com",
  messagingSenderId: "1071735849226",
  appId: "1:1071735849226:web:dc1316016aa09d2664baf3"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);