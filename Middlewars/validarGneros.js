export const validarGenero = (req,res,next) => {
    const {Genero } = req.body;
    
    if (!Genero || Genero.trim()=="") {
      return res.status(400).json({ mensaje: "este campo de genero es obligatorio" });   
    }
    next();
  }