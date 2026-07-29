import express from "express";
import dotenv from "dotenv";

import "./firebase";

import pedidosRouter from "./routes/pedidos";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Webhook online");
});

app.use("/pedidos", pedidosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
