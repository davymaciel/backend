import { MongoClient } from "mongodb";

let client = null;
let db = null;

async function conectarDb() {
  try {
    if (db == null) {
      const url = `mongodb+srv://gabrielzin0424_db_user:TYzzeP8dfxrZiOSQ@cluster0.ngjslzz.mongodb.net/`;
      
      client = new MongoClient(url);
      
      await client.connect();
      console.log("Conectado ao MongoDB com sucesso!");
      db = client.db("agenda");
    }
    return db;
  } catch (e) {
    console.log("Erro ao conectar no MongoDB", e.message);
  }
}

export default conectarDb;