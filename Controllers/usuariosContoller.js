import Usuarios from "../Models/Usuarios.js";

class usuarioController{

    static getAllUsuario = async (req, res) =>{
        const OBJusuarios = new Usuarios(); 
        const usuarios = await OBJusuarios.getAll(); 
        res.json(usuarios);
    }

    
    static createUsuario= async(req,res) => {
      try {
        const {id,nombre, apellido, telefono, documento,id_ciudad, id_genero,  usuario, contrasena  } = req.body;
        const OBJusuarios = new Usuarios();
        const usuarios = await OBJusuarios.create(id,nombre, apellido, telefono, documento,id_ciudad, id_genero,  usuario, contrasena);
        res.status(201).json(usuarios)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    static actualizarUsuario =async (req, res) => {

      const { id } = req.params;
      const { nombre, apellido, telefono, documento,id_ciudad, id_genero,  usuario, contrasena} = req.body;

      try {
        const OBJusuarios = new Usuarios(); 
        const usuarios = await OBJusuarios.update(id,nombre, apellido, telefono, documento,id_ciudad, id_genero,  usuario, contrasena);
        res.json(usuarios);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    static actualizarParcialUsuario= async (req, res) => {
      const { id } = req.params;
      const campos = req.body;
      try {
        const OBJusuarios = new Usuarios(); 
        const usuarios = await OBJusuarios.updateParcial(campos,id);
        res.status(201).json(usuarios)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    static eliminarUsuario = async (req, res) => {
      try {
        const { id } = req.params;
        const OBJusuarios = new Usuarios(); 
        const usuarios = await OBJusuarios.delete(id);
        res.status(201).json(usuarios)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}


export default usuarioController;