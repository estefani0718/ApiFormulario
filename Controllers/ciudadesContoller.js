
import Ciudads from "../Models/Ciudad.js";


class ciudadesController {


  static getAllCiudades = async (req, res) => {
    const objCiudad = new Ciudads();
    const ciudades = await objCiudad.getAll();
    res.json(ciudades);
  }

  static getCiudad = async (req, res) => {
    const { id } = req.params;
    const objCiudad = new Ciudads();
    const ciudades = await objCiudad.getId(id);
    res.json(ciudades);
  }

  static createCiudad = async (req, res) => {
    try {
      const { nombre_ciudades } = req.body;
      const objCiudad = new Ciudads();
      const ciudades = await objCiudad.create(nombre_ciudades);
      res.status(201).json(ciudades)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateCiudad = async (req, res) => {
    const { id } = req.params;
    const { nombre_ciudades } = req.body;
    try {
      const objCiudad = new Ciudads();
      const ciudades = await objCiudad.update(nombre_ciudades, id);
      res.status(201).json(ciudades)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static updateParcialCiudad = async (req, res) => {
    const { id } = req.params;
    const campos = req.body;
    try {
      const objCiudad = new Ciudads();
      const ciudades = await objCiudad.updateParcial(campos, id);
      res.status(201).json(ciudades)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static deleteCiudad = async (req, res) => {
    const { id } = req.params;
    try {
      const objCiudad = new Ciudads();
      const ciudades = await objCiudad.delete(id);
      res.status(201).json(ciudades)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ciudadesController;