import express from "express";
import lenguajeController from "../Controller/lenguajesController.js";

const router = express.Router();

router.get('/', lenguajeController.getAllLenguaje);

router.get('/:id', lenguajeController.getLenguajeId);

router.post('/', lenguajeController.createLenguaje);

router.put('/:id', lenguajeController.updateLenguaje);

router.patch('/:id', lenguajeController.updateParcialLenguaje);

router.delete('/:id', lenguajeController.deleteLenguaje);

export default router;