import db from "./conection.js";

/* -------------------------------------------------------------------------- */
/*                                   bodegas                                  */
/* -------------------------------------------------------------------------- */
import db from "./conection.js";
await db.createCollection("bodegas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "id_responsable", "estado"],
      properties: {
        id: {
          bsonType: "int",
          description: "El ID de la bodega",
        },
        nombre: {
          bsonType: ["string", "null"],
          description: "El nombre de la bodega",
        },
        id_responsable: {
          bsonType: ["int", "null"],
          description: "ID del responsable de la bodega",
        },
        estado: {
          bsonType: ["int", "null"],
          description: "El estado de la bodega",
        },
        created_by: {
          bsonType: ["int", "null"],
          description: "ID del creador de la bodega",
        },
        updated_by: {
          bsonType: ["int", "null"],
          description: "ID del usuario que actualizó la bodega",
        },
        created_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de creación de la bodega",
        },
        updated_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de actualización de la bodega",
        },
        deleted_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de eliminación de la bodega",
        },
      },
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                                  productos                                 */
/* -------------------------------------------------------------------------- */
import db from "./conection.js";
await db.createCollection("productos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "descripcion", "estado", "created_by"],
      properties: {
        id: {
          bsonType: ["int"],
          description: "El ID del producto",
        },
        nombre: {
          bsonType: ["string"],
          description: "El nombre del producto",
        },
        descripcion: {
          bsonType: ["string", "null"],
          description: "La descripción del producto",
        },
        estado: {
          bsonType: ["int", "null"],
          description: "El estado del producto",
        },
        created_by: {
          bsonType: ["int", "null"],
          description: "ID del creador del producto",
        },
        updated_by: {
          bsonType: ["long", "null"],
          description: "ID del usuario que actualizó el producto",
        },
        created_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de creación del producto",
        },
        updated_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de actualización del producto",
        },
        deleted_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de eliminación del producto",
        },
      },
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                                 historiales                                */
/* -------------------------------------------------------------------------- */

import db from "./conection.js";
await db.createCollection("historiales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["cantidad", "created_by"],
      properties: {
        id: {
          bsonType: ["int", "null"],
          description: "El ID del historial",
        },
        cantidad: {
          bsonType: ["int", "null"],
          description: "La cantidad en el historial",
        },
        id_bodega_origen: {
          bsonType: ["int", "null"],
          description: "ID de la bodega de origen",
        },
        id_bodega_destino: {
          bsonType: ["int", "null"],
          description: "ID de la bodega de destino",
        },
        id_inventario: {
          bsonType: ["int", "null"],
          description: "ID del inventario relacionado",
        },
        created_by: {
          bsonType: ["int", "null"],
          description: "ID del creador del historial",
        },
        updated_by: {
          bsonType: ["int", "null"],
          description: "ID del usuario que actualizó el historial",
        },
        created_at: {
          bsonType: ["date", "null"],
          description: "Fecha de creación del historial",
        },
        updated_at: {
          bsonType: ["date", "null"],
          description: "Fecha de actualización del historial",
        },
        deleted_at: {
          bsonType: ["date", "null"],
          description: "Fecha de eliminación del historial",
        },
      },
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                                 inventarios                                */
/* -------------------------------------------------------------------------- */

import db from "./conection.js";
await db.createCollection("inventarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_bodega", "id_producto", "cantidad", "created_by"],
      properties: {
        id: {
          bsonType: "int",
          description: "El ID del inventario",
        },
        id_bodega: {
          bsonType: ["int", "null"],
          description: "ID de la bodega relacionada",
        },
        id_producto: {
          bsonType: ["int", "null"],
          description: "ID del producto relacionado",
        },
        cantidad: {
          bsonType: ["int", "null"],
          description: "La cantidad en el inventario",
        },
        created_by: {
          bsonType: ["int", "null"],
          description: "ID del creador del inventario",
        },
        updated_by: {
          bsonType: ["int", "null"],
          description: "ID del usuario que actualizó el inventario",
        },
        created_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de creación del inventario",
        },
        updated_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de actualización del inventario",
        },
        deleted_at: {
          bsonType: ["date", "null", "string"],
          description: "Fecha de eliminación del inventario",
        },
      },
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                                    users                                   */
/* -------------------------------------------------------------------------- */
import db from "./conection.js";
await db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "estado", "password", "created_by"],
      properties: {
        id: {
          bsonType: "long",
          description: "El ID del usuario",
        },
        nombre: {
          bsonType: "string",
          description: "El nombre del usuario",
        },
        email: {
          bsonType: "string",
          description: "El email del usuario",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          uniqueItems: true,
        },
        email_verified_at: {
          bsonType: "date",
          description: "Fecha de verificación del email",
        },
        estado: {
          bsonType: "int",
          description: "El estado del usuario",
        },
        created_by: {
          bsonType: "long",
          description: "ID del creador del usuario",
        },
        updated_by: {
          bsonType: "long",
          description: "ID del usuario que actualizó los datos",
        },
        foto: {
          bsonType: "string",
          description: "URL de la foto del usuario",
        },
        password: {
          bsonType: "string",
          description: "La contraseña del usuario",
        },
        created_at: {
          bsonType: "date",
          description: "Fecha de creación del usuario",
        },
        updated_at: {
          bsonType: "date",
          description: "Fecha de actualización del usuario",
        },
        deleted_at: {
          bsonType: "date",
          description: "Fecha de eliminación del usuario",
        },
      },
    },
  },
});
