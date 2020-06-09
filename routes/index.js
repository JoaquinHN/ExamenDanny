const express = require("express");
const routes = express.Router();
//Importar controlador
const proyecto = require("../controllers/proyectController")
//Cargar las paginas
module.exports = function(){
    routes.get("/",proyecto.home);
    routes.post("/calculadora",proyecto.calculadora);
    return routes;
}