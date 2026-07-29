import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";

import "./firebase";
import pedidosRouter from "./routes/pedidos";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

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
