import { Router } from "express";
import db from "../db/conection.js";
const Inventario = db.collection("inventarios");

const router = Router();

// Realizar un EndPoint que permita insertar registros en la tabla de
// inventarios, los parámetros de entradadebenser
// (id_producto,id_bodega,cantidad).
// • La tabla no puede repetir la combinación de Bodega I Producto Por lo
// tanto será necesario validar si el ingreso que se está realizado ya
// existe o es una combinación totalmente nueva.
// • Si es una combinación totalmente nueva, se debe hacer un lnsert,
// considerando los datos ingresados.
// • Si es una combinación existentbe, entonces se debe hacer un Update
// a este registro, considerando la suma de la cantidad existente con la
// cantidad nueva.

router.post("/", async (req, res) => {
  try {
    const { id_producto, id_bodega, cantidad } = req.body;

    const inventarioFound = await Inventario.findOne({
      id_producto,
      id_bodega,
    });

    if (!inventarioFound) {
      const inventarioSaved = await Inventario.insertOne({
        id_bodega,
        id_producto,
        cantidad,
        created_by: 0,
      });
      return res.json({ ok: true, inventario_guardado: inventarioSaved });
    }

    const inventarioUpdated = await Inventario.updateOne(
      {
        id_bodega,
        id_producto,
      },
      {
        $set: {
          cantidad,
        },
      }
    );

    res.json({ ok: true, inventario_actualizado: inventarioUpdated });
  } catch (error) {
    console.log(
      "🚀 ~ file: productos.routes.js:22 ~ router.get ~ error:",
      error
    );
    res.status(500).json({ error });
  }
});

export { router };
