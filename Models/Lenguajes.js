import connection from "../Utils/db.js";

class Habilidades {
 
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener los lenguajes.")
    }
  }

  async getById(id) {
    try {
      const [rows] = await connection.query("SELECT * FROM lenguajes WHERE id_lenguaje = ?", [id]);
      return rows;
    } catch (error) {
      throw new Error("Error al obtener el lenguaje.")
    }
  }

  async create(nombre_lenguaje) {
    try {
      const [result] = await connection.query("INSERT INTO lenguajes(nombre_lenguaje) values (?)", [nombre_lenguaje]);
      return {
        id: result.id,
        nombre_lenguaje:nombre_lenguaje
      }
    } catch (error) {
      throw new Error("Error al crear el lenguaje.")
    }
  }

  async update(nombre_lenguaje, id) {
    try {
      const [result] = await connection.query("UPDATE lenguajes SET nombre_lenguaje = ? WHERE id_lenguaje = ?", [nombre_lenguaje, id]);
      if (result.affectedRows  === 0) throw new Error("Lenguaje no encontrado");
      return {
        id,
        nombre_lenguaje:nombre_lenguaje
      }
    } catch (error) {
      throw new Error("Error al actualizar el lenguaje.")
    }
  }

  async updateParcial(campos, id) {
    try {
      let sql = "UPDATE lenguajes SET "
      for (let i = 0; i < Object.keys(campos).length; i++) {
        let key = Object.keys(campos)[i];
        sql += `${key} = "${campos[key]}"`;
        if (i != Object.keys(campos).length - 1) sql += ", ";
      }
      sql += ` WHERE id_lenguaje = ${id}`

      const [result] = await connection.query(sql);
      if (result.affectedRows  === 0) {
        return {
          mensaje: "Lenguaje no encontrado"
        }
      }
      return {
        mensaje: "Lenguaje actualizado"
      }
    } catch (error) {
      throw new Error("Error al actualizar el lenguaje");
    }
  }

  async lenguajesConLenguajeUsuarios(lenguajeId){
    const [lenguajes_usuarios] = await connection.query("SELECT * FROM lenguaje_usuarios WHERE id_lenguaje = ?", [lenguajeId]);
    return lenguajes_usuarios.length > 0;
  }

  async delete(id){
    try {
      const lenguajeRelacion= await this.lenguajesConLenguajeUsuarios(id);

      if(lenguajeRelacion){
        return{
          mensaje: "No se puede eliminar el lenguaje, ya que está asociada "
        }
      }
      const [result] = await connection.query("DELETE FROM lenguajes WHERE id_lenguaje = ?", [id]);
      if (result.affectedRows  === 0){
        return {
          mensaje: "Lenguaje no encontrado"
        }
      }
      return {
        mensaje: "Lenguaje eliminado"
      }
    } catch (error) {
      throw new Error("Error al eliminar el lenguaje");
    }
  }
}

export default Habilidades;