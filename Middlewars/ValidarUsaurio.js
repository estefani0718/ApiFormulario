export const validarUsuario = (req,res,next) => {
    const {nombre,apellido,telefono,documento,contrasena,genero,ciudad} = req.body;
    
   
    if (!nombre ||nombre.trim()=="" ) {
      return res.status(400).json({ mensaje: "El nombre del usuario es obligatorio" });   
    }
    if (!apellido||apellido.trim()=="" ) {
        return res.status(400).json({ mensaje: "el apellido del usuario es obligatorio" });   
    }
    if (!telefono|| telefono.trim()=="" ) {
        return res.status(400).json({ mensaje: "el telefono del usuario es obligatorio" });   
    }
    if (!documento || documento.trim()=="") {
        return res.status(400).json({ mensaje: "El documento del usuario es pbligatorio" });   
      }
    if (!contrasena|| contrasena.trim()=="" ) {
        return res.status(400).json({ mensaje: "La contrseña del usuario es obligatoria" });   
    }
    if (!genero|| genero.trim()=="" ) {
        return res.status(400).json({ mensaje: "el genero del usuario es obligatorio" });   
    }
    if (!ciudad|| ciudad.trim()=="" ) {
        return res.status(400).json({ mensaje: "La ciudad del usuario es obligatorio" });   
    }
    next();
  }