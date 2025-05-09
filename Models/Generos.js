import{ connection }from "../Utils/db.js";
class Generos{

    /**
   * Metodo para obtener los registros de la base de datos
   * @returns {Array} Listado de los generos de un arreglo.
   */
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM Generos");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los generos.")
    }
  }

  async getById(id_genero) {
    try {
      const [rows] = await connection.query("SELECT * FROM Generos WHERE id_genero = ?", [id_genero]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener el genero.")
    }
  }

  async create(nombre_genero) {
    try {
      const [result] = await connection.query("INSERT INTO Generos(nombre_genero) values (?)", [nombre_genero]);
      return {
        id: result.id,
        nombre_genero:nombre_genero
      }
    } catch (error) {
      throw new Error("Error al crear el genero.")
    }
  }

  async update(nombre_genero, id_genero) {
    try {
      const [result] = await connection.query("UPDATE Generos SET nombre_genero = ? WHERE id_genero = ?", [nombre_genero, id_genero]);
      if (result.affectedRows  === 0) throw new Error("Genero no encontrado");
      return {
        id,
        nombre
      }
    } catch (error) {
      throw new Error("Error al actualizar el genero.")
    }
  }

  async updateParcial(campos, id_genero) {
    try {
      let sql = "UPDATE Generos SET "
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let key = Object.keys(campos)[i];
        sql += `${key} = "${campos[key]}"`;
        if (i != Object.keys(campos).length - 1) sql += ", ";
      }
      sql += ` WHERE id_genero = ${id_genero}`

      const [result] = await connection.query(sql);
      if (result.affectedRows  === 0) {
        return {
          mensaje: "Genero no encontrado"
        }
      }
      return {
        mensaje: "Genero actualizado"
      }
    } catch (error) {
      throw new Error("Error al actualizar el genero");
    }
  }

  async generosConUsuarios(id_genero){
    const [usuarios] = await connection.query("SELECT * FROM usuarios WHERE id_genero = ?", [id_genero]);
    return usuarios.length > 0;
  }

  async delete(id_genero){
    try {
      const generoConRelacion= await this.generosConUsuarios(id);

      if(generoConRelacion){
        return{
          mensaje: "No se puede eliminar el genero, ya que está relacionada con uno o más usuarios"
        }
      }
      const [result] = await connection.query("DELETE FROM Generos WHERE id_genero = ?", [id_genero]);
      if (result.affectedRows  === 0){
        return {
          mensaje: "Genero no encontrado"
        }
      }
      return {
        mensaje: "Genero eliminado"
      }
    } catch (error) {
      throw new Error("Error al eliminar el genero");
    }
  }

    
}

export default Generos;