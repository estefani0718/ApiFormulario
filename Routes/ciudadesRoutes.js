import express from "express";
import { validarCiudades } from "../Middlewars/validarCiudades.js";
import ciudadesContoller from "../Controllers/ciudadesContoller.js";

const router = express.Router();

router.get('/', ciudadesContoller.getAllCiudades);

router.get('/:id', validarCiudades,ciudadesContoller.getId);

router.post('/', ciudadesContoller.createCiudad);

router.put('/:id', ciudadesContoller.updateCiudad);

router.patch('/:id', ciudadesContoller.updateParcialCiudad);

router.delete('/:id', ciudadesContoller.deleteCiudad);

export default router;