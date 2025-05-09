import Habilidades from "../Models/Lenguaje.js";

class lenguajeController {
  static getAllLenguaje = async (req, res) => {
    const objLenguaje = new Habilidades();
    const lenguajes = await objLenguaje.getAll();
    res.json(lenguajes);
  }

  static getLenguajeId= async (req, res) => {
    const { id } = req.params;
    const objLenguaje = new Habilidades();
    const lenguajes = await objLenguaje.getById(id);
    res.json(lenguajes);
  }

  static createLenguaje = async (req, res) => {
    try {
      const { nombre_lenguaje} = req.body;
      const objLenguaje = new Habilidades();
      const lenguajes = await objLenguaje.create(nombre_lenguaje);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateLenguaje = async (req, res) => {
    const { id } = req.params;
    const { nombre_lenguaje } = req.body;
    try {
      const objLenguaje = new Habilidades();
      const lenguajes = await objLenguaje.update(nombre_lenguaje, id);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialLenguaje = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objLenguaje = new Habilidades();
      const lenguajes = await objLenguaje.updateParcial(campos, id);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteLenguaje = async (req, res) => {
    const { id } = req.params;
    try {
      const objLenguaje = new Habilidades();
      const lenguajes = await objLenguaje.delete(id);
      res.status(201).json(lenguajes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default lenguajeController;