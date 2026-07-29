import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../serviceAccountKey.json";

const firebaseConfig = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : serviceAccount;

initializeApp({
  credential: cert(firebaseConfig),
});

console.log("Firebase Admin conectado!");

export const db = getFirestore();
