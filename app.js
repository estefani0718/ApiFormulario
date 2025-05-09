import express from "express";
import bodyParser from "body-parser";

import ciudadesRoutes from "./Routes/usuariosRoutes.js"
import  generosRoutes from "./Routes/generosRoutes.js"
import lenguajesRoutes from "./Routes/lenguajesRoutes.js"
import usuariosRoutes from "./Routes/usuariosRoutes.jss"



const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/ciudades",ciudadesRoutes)
app.use("/generos",generosRoutes)
app.use("/lenguajes",lenguajesRoutes)
app.use("/usuarios",usuariosRoutes)


app.listen(3000, () => {
  console.log("running....")
});