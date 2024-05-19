const fs = require('fs');


const armazenarJson = (arquivo) =>{
    try {
        const newData = arquivo // Dados JSON enviados na requisição
        const existingData = JSON.parse(fs.readFileSync('dados.json', 'utf8'));
    
        // Adiciona os novos dados aos dados existentes
        existingData.push(...newData);
    
        // Escreve os dados atualizados no arquivo JSON
        fs.writeFileSync('dados.json', JSON.stringify(existingData));
    
      } catch (error) {
        console.error(error);
      }
    }

module.exports = armazenarJson