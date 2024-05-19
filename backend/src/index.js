var express = require("express");
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
//Importação de rotas
const routes = require('./routes.js')

try{
    app.listen(8000, function () {
      console.log("Servidor Iniciado");
      app.use(routes)
    });

}catch(erro){
    console.log("Falha ao inicializar a aplicação")
}

module.exports = app