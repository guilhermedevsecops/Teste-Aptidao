import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home/index';
import { Primeiro } from "./pages/primeiroTeste";
import { Segundo } from "./pages/segundoTeste";
import { Terceiro } from "./pages/terceiroTeste";
import { Quarto } from "./pages/quartoTeste";
import { Layout } from "./layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/teste1",
                element: <Primeiro />
            },
            {
                path: "/teste2",
                element: <Segundo />
            },
            {
                path: "/teste3",
                element: <Terceiro />
            },
            {
                path: "/teste4",
                element: <Quarto />
            },
        ]
    }
])

export { router }