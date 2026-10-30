import type { Request, Response } from "express";
import { ObjectId, type Collection } from "mongodb";
import type { FilmT } from "../model/films.model.js";


let filmCollection: Collection<FilmT>;


export const configCollection = (collection: Collection<FilmT>) => {
    filmCollection = collection
}


export const getFilms = (
    req: Request,
    res: Response
) => {
    filmCollection.find().toArray().then((result) => {
        res.json(result);
    }).catch((error) => {
        console.log(error)
        res.status(500).json({
            message: "Algo ha ido mal al buscar las pelis"
        })
    })
}


export const getFilmWithID = (
    req: Request,
    res: Response
) => {
    const id = String(req.params.id);
    if (!ObjectId.isValid(id)) {
        res.status(400).json({
            message: "Invalid ID"
        })
        return;
    }
    filmCollection.findOne({
        _id: new ObjectId(id)
    }).then((result) => {
        if (!result) {
            res.status(404).json({
                message: "Película no encontrada"
            })
            return;
        }

        res.json(result);
    }).catch((error) => {
        console.log(error)
        res.status(500).json({
            message: "Algo ha ido mal al buscar la peli"
        })
    })


}

export const createFilm = (
    req: Request,
    res: Response
) => {
    const newFilm: FilmT = {
        name: req.body.name,
        runtime: req.body.runtime
    };

    filmCollection.insertOne(newFilm).then((result) => {
        res.status(201).json({
            _id: result.insertedId,
            ...newFilm
        })
    }).catch(() => {
        res.status(500).json({
            message: "Error al crear la película"
        })
    })
}

export const deleteFilm = (
    req: Request,
    res: Response
) => {
    const id = String(req.params.id);

    if (!ObjectId.isValid(id)) {
        res.status(400).json({
            message: "Invalid ID"
        })
        return
    }


    filmCollection.deleteOne({
        _id: new ObjectId(id)
    }).then((result) => {
        if (result.deletedCount === 0) {
            res.status(404).json({
                message: "Película no eliminada"
            })
            return
        }

        res.json({
            message: "Película eliminada correctamente"
        })
    }).catch(() => {
        res.status(500).json({
            message: "Se lió la picha eliminando"
        })
    })

}

const findFilm = (id: string, res: Response) => {
    if (!ObjectId.isValid(id)) {
        res.status(400).json({
            message: "Invalid ID"
        })
        return null;
    }

    return filmCollection.findOne({
        _id: new ObjectId(id)
    }).then((result) => {
        if (!result) {
            res.status(404).json({
                message: "Película no encontrada"
            })
            return null;
        }

        return result;
    }).catch((error) => {
        console.log(error)
        res.status(500).json({
            message: "Algo ha ido mal al buscar la peli"
        })
        return null;
    })
}

export const changeFilm = (
    req: Request,
    res: Response
) => {
    const id = String(req.params.id);

    if (!ObjectId.isValid(id)) {
        res.status(400).json({
            message: "Invalid ID"
        })
        return
    }

    const peliActualizada: FilmT = {
        name: req.body.name,
        runtime: req.body.runtime
    }

    filmCollection.replaceOne({
        _id: new ObjectId(id)
    }, peliActualizada).then((result) => {
        if (result.matchedCount === 0) {
            res.status(404).json({
                message: "Película no encontrada"
            })
            return
        }

        res.json({
            _id: new ObjectId(id),
            ...peliActualizada
        })
    }).catch(() => {
        res.status(500).json({
            message: "Se lió cambiando"
        })
    })
}