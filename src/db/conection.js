import "dotenv/config";
import { MongoClient } from "mongodb";

const atlasUri = process.env.ATLAS_URI;
const dbName = process.env.ATLAS_DB_NAME;
const client = new MongoClient(atlasUri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log(`🦀🦀🦀 error  =   ${error}`);
  }
};

// devuelve la conexion a mongodb
const db = await connectToDatabase();

export default db;














