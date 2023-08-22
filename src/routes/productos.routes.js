import { Router } from "express";
import db from "../db/conection.js";
const Producto = db.collection("productos");
const Inventario = db.collection("inventarios");
const Bodega = db.collection("bodegas");

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
      {
        $sort: { totalUnidades: -1 }, // Ordena en orden descendente por totalUnidades
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

// Realizar un EndPoint que permita insertar un productos y a su vez asigne
// una cantidad inicial del mismo en la tabla inventarios en una de las bodegas
// por default.

router.post("/", async (req, res) => {
  try {
    const { id_producto, nombre, descripcion, cantidad } = req.body;

    const productInsert = await Producto.insertOne({
      id_producto,
      nombre,
      descripcion,
      estado: 1,
      created_by: 0,
    });

    const inventarioSaved = await Inventario.insertOne({
      id_bodega: 12,
      id_producto,
      cantidad,
      created_by: 0,
    });

    const inventarioFound = await Inventario.findOne({
      _id: inventarioSaved.insertedId,
    });

    res.json({ ok: true, productoInsertado: inventarioFound });
  } catch (error) {
    console.log(
      "🚀 ~ file: productos.routes.js:22 ~ router.get ~ error:",
      error
    );
    res.status(500).json({ error });
  }
});

export { router };
