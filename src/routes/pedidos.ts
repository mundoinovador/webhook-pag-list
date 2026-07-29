import { Router } from "express";

import { receberPedido } from "../controllers/pedidosController";

const router = Router();

router.post("/", receberPedido);

export default router;
