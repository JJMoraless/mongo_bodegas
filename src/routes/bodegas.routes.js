import { Router } from "express";
import db from "../db/conection.js";
const Bodegas = db.collection("bodegas");

const router = Router();
router.post("/", async (req, res) => {
  try {
    const bodegaSaved = await Bodegas.insertOne(req.body);
    const bodegaFind = await Bodegas.findOne({ _id: bodegaSaved.insertedId });
    res.status(200).json({ ok: true, bodega: bodegaFind });
  } catch (error) {
    console.log("🚀 ~ file: bodegas.routes.js:18 ~ router.get ~ error:", error);
    res.status(500).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const bodegasFind = await Bodegas.find().sort({ nombre: 1 }).toArray();
    res.status(200).json({ ok: true, bodegas: bodegasFind });
  } catch (error) {
    console.log("🚀 ~ file: bodegas.routes.js:18 ~ router.get ~ error:", error);
    res.status(500).json({ error });
  }
});
export { router };
