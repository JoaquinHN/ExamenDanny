const express = require("express");
const routes = express.Router();
//Importar controlador
const proyecto = require("../controllers/proyectController")
//Cargar las paginas
routes.get('/',(req,res)=>{
    res.send('Hello World')
});