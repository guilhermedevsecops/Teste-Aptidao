import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../api/axios';

interface ApiResponse {
    message: {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        ibge: string;
        gia: string;
        ddd: string;
        siafi: string;
    };
}

export function Quarto() {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [data, setData] = useState({
        cep: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post<ApiResponse>("/verificaCep", {
                cep: data.cep
            });
            console.log(response.data);
            setApiResponse(response.data);
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
        <div className="container">
            <h1>Teste 4</h1>
            <h1>Api de Busca de CEP</h1>
            <p>Digite um CEP</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="cep"
                    placeholder="74490-234"
                    value={data.cep}
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
            </form>
            <div className="resultado">
                {apiResponse && (
                    <div>
                        <h2>Informações de Endereço:</h2>
                        <p>CEP: {apiResponse.message.cep}</p>
                        <p>Logradouro: {apiResponse.message.logradouro}</p>
                        <p>Complemento: {apiResponse.message.complemento}</p>
                        <p>Bairro: {apiResponse.message.bairro}</p>
                        <p>Localidade: {apiResponse.message.localidade}</p>
                        <p>UF: {apiResponse.message.uf}</p>
                        <p>IBGE: {apiResponse.message.ibge}</p>
                        <p>GIA: {apiResponse.message.gia}</p>
                        <p>DDD: {apiResponse.message.ddd}</p>
                        <p>SIAFI: {apiResponse.message.siafi}</p>
                    </div>
                )}
            </div>
        </div>
    );
}


