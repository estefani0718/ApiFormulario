import Generos from "../Models/Generos.js";

class GenerosController {

  static getAllGeneros = async (req, res) => {
    const objGenero = new Generos();
    const generos = await objGenero.getAll();
    res.json(generos);
  }

  static getGeneroId = async (req, res) => {
    const { id_genero } = req.params;
    const objGenero = new Generos();
    const generos = await objGenero.getById(id_genero);
    res.json(generos);
  }

  static createGenero = async (req, res) => {
    try {
      const { nombre_genero} = req.body;
      const objGenero = new Generos();
      const generos = await objGenero.create(nombre_genero);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateGenero = async (req, res) => {
    const { id_genero } = req.params;
    const { nombre_genero } = req.body;
    try {
      const objGenero = new Generos();
      const generos = await objGenero.update(nombre_genero, id_genero);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialGenero = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objGenero = new Generos();
      const generos = await objGenero.updateParcial(campos, id);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteGenero = async (req, res) => {
    const { id_genero } = req.params;
    try {
      const objGenero = new Generos();
      const generos = await objGenero.delete(id_genero);
      res.status(201).json(generos)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default GenerosController;