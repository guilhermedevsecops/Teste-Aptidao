import {Veiculo} from '../interfaces/Veiculo';

export class Carro implements Veiculo {
    tipo : "Carro";
    modelo: string;
    ano_de_Fabricacao: number;
    quantidade_de_Portas: number;
    marca: string;

    constructor(modelo: string,
        ano_de_Fabricacao: number,
        quantidade_de_Portas: number,
        marca : string 
        ){
            
this.modelo = modelo;
this.ano_de_Fabricacao = ano_de_Fabricacao;
this.quantidade_de_Portas = quantidade_de_Portas;
this.marca = marca;
    }
    
}