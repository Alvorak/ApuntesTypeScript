import { Router } from "express";
import { deleteFilm, getFilms, getFilmWithID, createFilm } from "../controller/films.controller.js";



const router = Router();


router.get("/", getFilms);
router.get("/:id", getFilmWithID);

router.delete("/:id", deleteFilm);

router.post("/", createFilm);



export default router;