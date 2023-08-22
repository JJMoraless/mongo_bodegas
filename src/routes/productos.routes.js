import { Router } from "express";
import db from "../db/conection.js";
const Productos = db.collection("productos");
const Inventario = db.collection("inventarios");
const router = Router();

// Realizar un EndPoint que permita listar todos los productos en orden
// descendente por el campo "Total".
// • El campo "Totial" es la cantidad de unidades que la empresa tiene
// de este producto, considerando la unión de todas las bodegas, es
// decir que el dato como tal no existe en la base de datos,sino se debe
// calcular. Si la Bodega A tiene 1O unidades, la Bodega B tene 5
// unidades y la Bodega C tiene 3 unidades. Total= 18.

router.get("/", async (req, res) => {
  try {
    const productos = await Inventario.aggregate([
      {
        $lookup: {
          from: "productos",
          localField: "id_producto",
          foreignField: "id",
          as: "productos",
        },
      },
      {
        $group: {
          _id: "$productos.nombre",
          totalUnidades: { $sum: "$cantidad" },
        },
      },
    ]).toArray();
    res.json({ ok: true, productos });
  } catch (error) {
    console.log(
      "🚀 ~ file: productos.routes.js:22 ~ router.get ~ error:",
      error
    );
    res.status(500).json({ error });
  }
});

export { router };
