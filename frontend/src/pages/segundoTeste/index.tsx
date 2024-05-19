import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '../../api/axios';


interface DataState {
    valor: string;

}

interface ApiResponse {
    message: Record<string, number>;
}

export function Segundo() {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [data, setData] = useState<DataState>({
        valor: ''
    });

    const retornaApi = (resultadoTroco: ApiResponse) => {
        setApiResponse(resultadoTroco)
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post<ApiResponse>("/compras", {
                valor: data.valor,
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
        <div className="container">
            <h1>Teste 2</h1>
            <h2>Valor troco</h2>
            
            <form onSubmit={handleSubmit}>
                <input className="formulario"
                    type="text"
                    name="valor"
                    placeholder="Digite um valor que queira o troco"
                    value={data.valor}
                    onChange={handleInputChange}
                    />
                <button type="submit">Enviar</button>
            </form>
            <div className="resposta">
        {apiResponse && (
          <div>
            <h2>Resposta</h2>
            <ul>
              {Object.entries(apiResponse.message).map(([key, value]) => (
                <p key={key}>
                  Notas {key}, Valor: {value}
                </p>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}




