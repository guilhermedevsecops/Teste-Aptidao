function verificarTroco(valor) {
    var notas = [100, 10, 1]
    var troco = {'100': 0, '10': 0, '1': 0}
    
    for (var nota of notas) {
      while (valor >= nota) {
        troco[nota] += 1
        valor -= nota
      }
    }
  
    return troco
  }

  module.exports = verificarTroco