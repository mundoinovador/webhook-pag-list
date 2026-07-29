import dotenv from "dotenv";

dotenv.config();

import express from "express";

import "./firebase";

import pedidosRouter from "./routes/pedidos";

const app = express();

import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:4321",
      "http://localhost:3000",
      "https://seu-dominio.com",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.options("*", cors());

app.use(
  express.json({
    type: "application/json",
  }),
);

app.get("/", (_, res) => {
  res.send("Webhook online");
});

app.use("/pedidos", pedidosRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
