import db from "./conection.js";

/* -------------------------------------------------------------------------- */
/*                                   bodegas                                  */
/* -------------------------------------------------------------------------- */
import { bodegasData } from "../../data/bodegasData.js";
import db from "./conection.js";
const Bodegas = db.collection("bodegas");
const bodegas = await Bodegas.insertMany(bodegasData());

/* -------------------------------------------------------------------------- */
/*                                  productos                                 */
/* -------------------------------------------------------------------------- */
import { productosData } from "../../data/productosData.js";
import db from "./conection.js";
const Productos = db.collection("productos");
await Productos.insertMany(productosData());

/* -------------------------------------------------------------------------- */
/*                                 inventarios                                */
/* -------------------------------------------------------------------------- */
import { inventariosData } from "../../data/inventariosData.js";
import db from "./conection.js";
const Inventarios = db.collection("inventarios");
await Inventarios.insertMany(inventariosData());

/* -------------------------------------------------------------------------- */
/*                                 historiales                                */
/* -------------------------------------------------------------------------- */
import db from "./conection.js";
import { productosData } from "../../data/productosData.js";
const historialesDocs = [
  {
    id: 18,
    cantidad: 7,
    id_bodega_origen: 12,
    id_bodega_destino: 18,
    id_inventario: 18,
    created_by: 18,
    update_by: null,
    created_at: null,
    updated_at: null,
    deleted_at: null,
  },
  {
    id: 20,
    cantidad: 9,
    id_bodega_origen: 11,
    id_bodega_destino: 12,
    id_inventario: 18,
    created_by: 15,
    update_by: null,
    created_at: null,
    updated_at: null,
    deleted_at: null,
  },
  {
    id: 21,
    cantidad: 7,
    id_bodega_origen: 29,
    id_bodega_destino: 30,
    id_inventario: 36,
    created_by: null,
    update_by: null,
    created_at: new Date("2022-06-03T03:18:19"),
    updated_at: new Date("2022-06-03T03:18:19"),
    deleted_at: null,
  },
  {
    id: 22,
    cantidad: 666,
    id_bodega_origen: 26,
    id_bodega_destino: 24,
    id_inventario: 27,
    created_by: null,
    update_by: null,
    created_at: new Date("2022-06-03T03:19:14"),
    updated_at: new Date("2022-06-03T03:19:14"),
    deleted_at: null,
  },
  {
    id: 23,
    cantidad: 100,
    id_bodega_origen: 19,
    id_bodega_destino: 18,
    id_inventario: 41,
    created_by: null,
    update_by: null,
    created_at: new Date("2022-06-03T03:20:24"),
    updated_at: new Date("2022-06-03T03:20:24"),
    deleted_at: null,
  },
  {
    id: 24,
    cantidad: 25,
    id_bodega_origen: 19,
    id_bodega_destino: 26,
    id_inventario: 41,
    created_by: null,
    update_by: null,
    created_at: new Date("2022-06-03T03:27:47"),
    updated_at: new Date("2022-06-03T03:27:47"),
    deleted_at: null,
  },
  {
    id: 25,
    cantidad: 25,
    id_bodega_origen: 19,
    id_bodega_destino: 26,
    id_inventario: 41,
    created_by: null,
    update_by: null,
    created_at: new Date("2022-06-03T03:28:27"),
    updated_at: new Date("2022-06-03T03:28:27"),
    deleted_at: null,
  },
  {
    id: 26,
    cantidad: 300,
    id_bodega_origen: 18,
    id_bodega_destino: 12,
    id_inventario: 42,
    created_by: null,
    update_by: null,
    created_at: new Date("2022-06-03T03:51:23"),
    updated_at: new Date("2022-06-03T03:51:23"),
    deleted_at: null,
  },
];
const Historiales = db.collection("historiales");
await Historiales.insertMany(historialesDocs);
