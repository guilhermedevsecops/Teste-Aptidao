import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../api/axios';
import './index.css'

interface DataState {
    numero: string;
}

export function Primeiro() {
    const [apiResponse, setApiResponse] = useState<string | null>(null);
    const [data, setData] = useState<DataState>({
        numero: ''
    });

    const retornaApi = (valor : any) =>{
        setApiResponse(valor)
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post("/numeros", {
                numeros: data.numero
            });

            retornaApi(response.data.resultado)
        
            
            
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
            <div>
                <h1>Teste 1</h1>
                <h2>Numeros Palindromos</h2>
                
            </div>
            <form className="formulario" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="numero"
                    placeholder="Digite um número"
                    value={data.numero}
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
            </form>
            <div className="resposta">{apiResponse}</div>
        </div>
    );
}
