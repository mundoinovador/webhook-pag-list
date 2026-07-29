import type { Request, Response } from "express";

import { db } from "../firebase";

export async function receberPedido(req: Request, res: Response) {
  try {
    const pedido = req.body;

    console.log("Pedido recebido:", pedido);

    const clienteId = pedido.clienteId;

    if (!clienteId) {
      return res.status(400).json({
        erro: "clienteId obrigatório",
      });
    }

    await db
      .collection("clientes")
      .doc(clienteId)
      .collection("pedidos")
      .add({
        ...pedido,
        status: "novo",
        criadoEm: new Date(),
      });

    return res.status(200).json({
      sucesso: true,
    });
  } catch (error) {
    console.error("Erro ao salvar pedido:", error);

    return res.status(500).json({
      erro: "Erro interno",
    });
  }
}
