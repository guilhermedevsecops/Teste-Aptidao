const express = require("express");
const routes = express.Router();
const fs = require('fs');

//validadores
const validador = require('./validador/palidormos.js')
const verificarTroco = require('./validador/verificarTroco.js')
const preencherFormulario = require('./validador/preencherFormularioMoto.js')

//consumo de api
const verificarCep = require('./api/cep.js');
const armazenarJson = require("./db/jsondb.js");
const cors = require('cors')

routes.use(cors());


const requisicao = []
const existingData = []
const a = 0

routes.get( "/home", (req, res) =>{
    res.json({message : "Bem Vindo ao Teste de Aptidão"})
} )

//resposta da primeira questão
routes.post("/numeros", (req, res) =>{
    const valorJson = req.body.numeros
    const novovalor = parseInt(valorJson)
    
    const valor = validador(parseInt(novovalor))
    if(novovalor === valor){
        res.json({resultado : "É palindromo" })
    }else{
        res.json({resultado : "Não é palindromo"})
    }
})

//resposta segunda questão
routes.post("/compras", (req, res) => {
    const valorCompra = req.body.valor
    const converter = parseInt(valorCompra)
    const valorTroco = verificarTroco(converter)

    res.json({message : valorTroco})
})

//resposta terceira questão
routes.post("/veiculos", async (req,res) => {

    switch(req.body.quantidade_de_portas){
        case 2:
           s = await preencherFormulario(req.body)
        break;
        case 4:
           s = await preencherFormulario(req.body)
        break;
        case 0:
           s = await preencherFormulario(req.body)
            break;
        default: 
           s = await preencherFormulario(req.body)
        break;
    }
    retornoClasse = s
    const existingData = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    existingData.push(retornoClasse);
    fs.writeFileSync('dados.json', JSON.stringify(existingData));
    res.json({message : s})
    
})

//Resposta da quarta qeustão
routes.post('/verificaCep',async  (req, res)=>{
    const cep = req.body.cep
    valorCep = JSON.stringify(cep)
    requisicao.push(cep)
    const resultadocep = await verificarCep(valorCep)
    res.json({message : resultadocep})

}

)

module.exports = routes;