import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../serviceAccountKey.json";

initializeApp({
  credential: cert(serviceAccount),
});

console.log("Firebase Admin conectado!");

export const db = getFirestore();
