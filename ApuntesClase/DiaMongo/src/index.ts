import express from "express";
import type { Collection } from "mongodb";
import { configCollection } from "./controller/films.controller.js";
import type { FilmT } from "./model/films.model.js";
import { connectMongo } from "./config/database.js";
import routerFilms from "./router/films.router.js";

const app = express();

app.use(express.json());

const PORT = 1986;
const startServer = () => {

    connectMongo().then((db) => {
        const peliculasCollection: Collection<FilmT> = db.collection("Peliculillas");
        configCollection(peliculasCollection);

        app.use("/films", routerFilms);

        app.listen(PORT, () => {
            console.log(`🌹 It's a strange world, isn't it?  Even my API is running on port ${PORT}.`);
        })

    }).catch(() => {
        console.log("No se ha podido conectar a Mongo")
    })

};

startServer();