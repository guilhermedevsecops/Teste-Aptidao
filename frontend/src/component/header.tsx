import { Link } from 'react-router-dom'
import Logo from '../assets/20211110174809.png'
import './header.css'

export function Header() {
    return (
        <header>
            <div>
                <div className="logo">
                    <img src={Logo} />
                </div>
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/teste1">TESTE-1</Link>
                <Link to="/teste2">TESTE-2</Link>
                <Link to="/teste3">TESTE-3</Link>
                <Link to="/teste4">TESTE-4</Link>
            </div>
        </header>
    )
}