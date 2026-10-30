import { Db, MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://FrankNFurter:4002@cluster0.2yp6ln1.mongodb.net/");



export const connectMongo = (): Promise<Db> => {

    return client.connect().then(() => {
        console.log("Dentro del Monguito");

        return client.db("Clase")
    }).catch((error) => {
        console.log("Error al conectar con Mongo");
        throw error;
    })

}