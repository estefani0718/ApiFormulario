import express from "express";
import usuariosContoller from "../Controllers/usuariosContoller.js";
import { validarUsuario} from "../Middlewars/ValidarUsaurio.js";

const router = express.Router();

router.get('/', usuariosContoller.getAllUsuario);

router.post('/',validarUsuario, usuariosContoller.createUsuario)

router.put('/:id', usuariosContoller.actualizarUsuario);

router.patch('/:id', usuariosContoller.actualizarParcialUsuario);

router.delete('/:id', usuariosContoller.eliminarUsuario);



export default router;