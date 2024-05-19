import React, { useState, useEffect } from 'react';
import api from "../../api/axios";
import './index.css'

export function Home(){

    const [boasVindas, setUser] = useState();

    useEffect(() => {
        api
          .get("/home")
          .then((response) => setUser(response.data.message))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

return (

    <div className="container">
      <p>{boasVindas}</p>
      
    </div>
  );
}