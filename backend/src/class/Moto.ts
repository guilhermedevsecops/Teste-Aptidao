import {Veiculo} from "../interfaces/Veiculo";

export class Moto implements Veiculo{
    tipo : "Moto";
    modelo: string;
    ano_de_Fabricacao: number;
    quantidade_de_Portas: number;
    marca: string;
    rodas : number;
    passageiros : number;

    constructor(modelo: string,
                ano_de_Fabricacao: number,
                quantidade_de_Portas: number,
                marca : string, 
                rodas : number, 
                passageiros : number){

		this.modelo = modelo;
		this.ano_de_Fabricacao = ano_de_Fabricacao;
		this.quantidade_de_Portas = quantidade_de_Portas;
        this.marca = marca;
        this.rodas = rodas;
        this.passageiros = passageiros;
	}
}

