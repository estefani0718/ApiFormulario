import connection from "../Utils/db,js";

class Ciudads{

    async getId(id){
        try {
            const [rows] = await connection.query("SELECT * FROM Ciudades WHERE id_ciudades = ?", [id]);
            return rows;
        } catch (error) {
            throw new Error("¡¡Error !! ,al obtener la ciudad.")
        }
    }


    async getAll(){
        try {
            const [rows]=await connection.query("SELECT * FROM Ciudades");
            return rows;
        } catch (error) {
            throw new Error ("Error al obtener las ciudades");
        }
    }

    async create(nombre_ciudades){
        try {
            const [result]=await connection.query("INSERT INTO Ciudades(nombre_ciudades) VALUES (?)",[nombre_ciudades]);
            return{
                id:result.id,
                nombre_ciudades:nombre_ciudades
            }
        } catch (error) {
            throw new error("error al crear la ciudad")
        }
    }

    async update(id,nombre_ciudades){
        try {
            const [result]=await connection.query("UPDATE   Ciudades SET nombre_ciudades=? WHERE id_ciudad=?",[nombre_ciudades,id]);
            if(result.affectedRows===0){
                throw new Error("Categoria no encontrada");
            }
            return{
                id:id,
                nombre_ciudades:nombre_ciudades
            }
        } catch (error) {
            
        }
    }
    async updateParcial(campos, id) {
        try {
          let sql = "UPDATE Ciudades SET "
          for (let i = 0; i < Object.keys(campos).length; i++) {
            let key = Object.keys(campos)[i];
            sql += `${key} = "${campos[key]}"`;
            if (i != Object.keys(campos).length - 1) sql += ", ";
          }
          sql += ` WHERE id_ciudades = ${id}`
    
          const [result] = await connection.query(sql);
          if (result.affectedRows  === 0) {
            return {
              mensaje: "Ciudad no encontrada"
            }
          }
          return {
            mensaje: "Ciudad actualizada"
          }
        } catch (error) {
          throw new Error("Error al actualizar la ciudad");
        }
      }
    



    async CiudadesVinculadas(ciudades_id){
        const [rows]=await connection.query("SELECT * FROM Usuarios WHERE id_ciudades=?",[ciudades_id]);
        return rows.length>0;
    }

    async deleteCiudad(id){
        try {
            if(await this.CiudadesVinculadas(id)){
                throw new Error("No se puede eliminar la ciudad porque tiene usuarios vinculados");
            }
            const [result]=await connection.query("DELETE FROM Ciudades WHERE id_ciudades=?",[id]);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }



    
}

export default Ciudads;