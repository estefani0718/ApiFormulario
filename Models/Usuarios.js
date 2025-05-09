import connection from "../utils/db.js";
//  
class Usuarios{
   
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de las categorias en un arreglo
     */
    // metodos crud 
    async getAll(){
        try {
            const [rows] = await connection.query("SELECT * FROM Usuarios");
            return rows;    
        } catch (error) {
            throw new Error("Error al obtener todos los  Usuarios");
        }        
    }

    async create(id,nombre, apellido, telefono, documento,id_ciudad, id_genero,  usuario, contrasena) {
        try {            
            const [result] = await connection.query("INSERT INTO Usuarios (nombre, apellido, telefono, id_ciudad, id_genero, documento, usuario, contrasena) VALUES (?,?)", [id,nombre, apellido, telefono, documento,id_ciudad, id_genero,  usuario, contrasena]);
        return {
            id: result.id,
            nombre: nombre,
            apellido : apellido, 
            telefono : telefono,
            documento:documento, 
            id_ciudad:id_ciudad, 
            id_genero :id_genero,
            usuario:usuario, 
            contrasena:contrasena
        };
        } catch (error) {
          throw new Error("Error al crear un Usuario ");  
        }
  }
    async update(id_usuario,nombre, apellido, telefono, id_ciudad, id_genero, documento, usuario, contrasena) {
        try {
          
          const [result] = await connection.query(`UPDATE Usuarios SET nombre=?, apellido=?, telefono=?, id_ciudad=?, id_genero=?, documento=?, usuario=?, contrasena=? WHERE id = ?`,[nombre, apellido, telefono, id_ciudad, id_genero, documento, usuario, contrasena,id_usuario]);
          if (result.affectedRows === 0) {
              throw new Error("Usuario en la lista no encontrado");
          }
          return {id_usuario,nombre, apellido, telefono, id_ciudad, id_genero, documento, usuario, contrasena}
        } catch (error) {
          console.log(error.message);
          throw new Error("Error al Editar o actualizar el Usuario "); 
        }
    }
    async updateParcial(campos,id_usuario) {
      try {
        let sql = "UPDATE Usuarios SET ";
        for (let cont = 0; cont < Object.keys(campos).length; cont++) {
          let value = Object.keys(campos)[cont];
          sql += `${value} = '${campos[value]}'`;
          if (cont == Object.keys(campos).length - 1) {
            sql += "";
          }
          else {
            sql += ",";
          }
        }
        sql += ` WHERE id = ${id_usuario}`;
        const [result] = await connection.query(sql);
        if (result.affectedRows === 0) { throw new Error("Usuario en la lista no encontrado"); }
        return { mensaje: "Categoria Actualizada" }
      } catch (error) {
        throw new Error("ERROR: Al Actualizar la Usuario parcialmente");
      }
    }
    
   
    async delete(id_usuario) {
      try {
        
        const [result]=await connection.query("DELETE FROM Usuarios WHERE id=?",[id_usuario]);
        if (result.affectedRows === 0) {
          throw new Error("usuario no encontrado");
        }
        return { mensaje: "usuario fue eliminada " }
      } catch (error) {
        throw new Error("ERROR:  al eliminar el usuario ");
      }
    }
}

export default Usuarios;