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

    // Gera número do pedido com 4 dígitos
    const pedidoId = String(Math.floor(1000 + Math.random() * 9000));

    await db
      .collection("clientes")
      .doc(clienteId)
      .collection("pedidos")
      .doc(pedidoId)
      .set({
        ...pedido,
        numeroPedido: pedidoId,
        status: "novo",
        criadoEm: new Date(),
      });

    return res.status(200).json({
      sucesso: true,
      pedidoId,
    });
  } catch (error) {
    console.error("Erro ao salvar pedido:", error);

    return res.status(500).json({
      erro: "Erro interno",
    });
  }
}
