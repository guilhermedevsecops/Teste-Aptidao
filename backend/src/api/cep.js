const axios = require('axios')

const verificarCep =  async (cep) =>{
    try{
        const cepc = cep.replace(/["]/g, '');
        const viaCepURL = `https://viacep.com.br/ws/${cepc}/json/`
        const {data} = await axios.get(viaCepURL)
        return data
    }catch(error){
        console.error(error)
    }
}

module.exports = verificarCep;