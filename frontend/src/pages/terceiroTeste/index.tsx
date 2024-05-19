import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../api/axios';
import './index.css'


interface DataState {
    marca: string;
    modelo: string;
    ano_de_Fabricacao: string;
    quantidade_de_Portas: string;
    rodas: string;

}

interface ApiResponse {
    message: Record<string, number>;
}

export function Terceiro() {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [data, setData] = useState<DataState>({
        marca: '',
        modelo: '',
        ano_de_Fabricacao: '',
        quantidade_de_Portas: '',
        rodas: ''
    });

    const retornaApi = (resultadoTroco: ApiResponse) => {
        setApiResponse(resultadoTroco)
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post<ApiResponse>("/veiculos", {
                marca: data.marca,
                modelo: data.modelo,
                ano_de_Fabricacao: data.ano_de_Fabricacao,
                quantidade_de_Portas: data.quantidade_de_Portas,
                rodas: data.rodas
            });

            retornaApi(response.data);



        } catch (error) {
            console.error('Erro ao enviar a requisição:', error);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <div className="container_divisoria">
                
                <h1>Teste 3</h1>
                <h1>Tipo de Veiculo</h1>
            
                <form onSubmit={handleSubmit}>
                    <p>Marca</p>
                    <input
                        type="text"
                        name="marca"
                        placeholder=""
                        value={data.marca}
                        onChange={handleInputChange}
                    />
                    <p>Modelo</p>
                    <input
                        type="text"
                        name="modelo"
                        placeholder="Digite um número"
                        value={data.modelo}
                        onChange={handleInputChange}
                    />
                    
                    <p>Fabricacao</p>
                    <input
                        type="text"
                        name="ano_de_Fabricacao"
                        placeholder="Digite um número"
                        value={data.ano_de_Fabricacao}
                        onChange={handleInputChange}
                    />
                    <p>Quantidade de Portas</p>
                    <input
                        type="text"
                        name="quantidade_de_Portas"
                        placeholder="Digite um número"
                        value={data.quantidade_de_Portas}
                        onChange={handleInputChange}
                    />
                    <p>Rodas</p>
                    <input
                        type="text"
                        name="rodas"
                        placeholder="Digite um número"
                        value={data.rodas}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Enviar</button>
                </form>
                <div>
                {apiResponse && (
                    <div>
                        <h2>Resposta da API:</h2>
                        <ul>
                            {Object.entries(apiResponse.message).map(([key, value]) => (
                                <p key={key}>
                                     {key} : {value}
                                </p>
                            ))}
                        </ul>
                    </div>
                )}
                <strong>O arquivo gerado que irá ilustrar o banco está em backend nomeado de dados.json</strong>
               
            </div>
            </div>
            
            
        </div >
    );
}




