const {Carro} = require('../class/Carro')
const {Moto} = require('../class/Moto')

const preencherFormulario = (informacoes) =>{
    if(informacoes.quantidade_de_Portas == 2 || informacoes.quantidade_de_Portas == 4){
        let carro = new Carro()
        carro.tipo = "Carro"
        carro.marca = informacoes.marca,
        carro.modelo = informacoes.modelo,
        carro.ano_de_Fabricacao = informacoes.ano_de_Fabricacao,
        carro.quantidade_de_Portas = informacoes.quantidade_de_Portas
        
        return carro
    }else{
        let motos = new Moto()
        motos.tipo = "Moto"
        motos.modelo = informacoes.modelo,
        motos.ano_de_Fabricacao = informacoes.ano_de_Fabricacao,
        motos.marca = informacoes.marca,
        motos.quantidade_de_Portas = informacoes.quantidade_de_Portas, 
        motos.rodas = informacoes.rodas, 
        motos.passageiros = informacoes.passageiros
        return motos
    }
        
}

module.exports = preencherFormulario;
