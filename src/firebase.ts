import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "node:fs";
import path from "node:path";

let serviceAccount: any;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
  const caminho = path.resolve(process.cwd(), "serviceAccountKey.json");

  if (!fs.existsSync(caminho)) {
    throw new Error(
      "Arquivo serviceAccountKey.json não encontrado e FIREBASE_SERVICE_ACCOUNT não configurado.",
    );
  }

  serviceAccount = JSON.parse(fs.readFileSync(caminho, "utf-8"));
}

initializeApp({
  credential: cert(serviceAccount),
});

console.log("Firebase Admin conectado!");

export const db = getFirestore();
