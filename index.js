const express = require("express");

//Handelbars
const exphbs = require("express-handlebars");

// Crear un servidor de express
const app = express();
// rutas del servidor
//rutas
const routes = require("./routes");

app.engine(
  "hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

// app.use("/", routes());
app.use("/", routes());
// Inicializar el servidor en un puerto en específico
app.listen(2000, () => {
  console.log("Servidor ejecutandose en el puerto 2000");
});
