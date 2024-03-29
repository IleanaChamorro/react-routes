import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


const MenuConceptos = () => {
  return (
    <nav>
        <ol>
            <li>
                <span>Enlaces HTML (no recomendado): </span>
                {/*Genera un renderizado por aplicación */}
                <a href="/">Home</a>
                <a href="/acerca">Acerca</a>
                <a href="/contacto">Contacto</a>
            </li>

            <li>
                {/*No se renderiza la app completa */}
                <span>
                    Componente Link: 
                </span>
                <Link to="/">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/no-existe">Error 404</Link>
            </li>
            <li>
                <span>Componente NavLink: </span>
                <NavLink exact to="/" activeClassName='active'>Home</NavLink>
                <NavLink exact to="/acerca" activeClassName='active'>Acerca</NavLink>
                <NavLink exact to="/contacto" activeClassName='active'>Contacto</NavLink>
            </li>
            <li>
                <span>Parámetros: </span>
                <Link to="/usuario/ilechamorro">IleChamorro</Link>
                <Link to="/usuario/tuki">Tuki</Link>
            </li>
            <li>
                <span>Parámetro de consulta: </span>
                <Link to="/productos">Productos</Link>
            </li>
            <li>
            <span>Redirecciones: </span>
            <Link to="/about">About</Link>
            <Link to="/contacto">Contacto</Link>
            </li>
            <li>
                <span>Rutas Anidadas: </span>
                <Link to="/react">React</Link>
            </li>
            <li>
                <span>Rutas privadas: </span>
            
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ol>
    </nav>
  )
}

export default MenuConceptos