import React from 'react';
import Auth0Authentication from '../../Auth/Auth';

import './Navegacion.css';
import { NavLink } from 'react-router-dom';

interface INavegacionProps {
  auth: Auth0Authentication;
}
class Navegacion extends React.Component<INavegacionProps> {
  cerrarSesion = () => {
    this.props.auth.logout();
  };
  iniciarSesion = () => {
    this.props.auth.login();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const isLogged = localStorage.getItem('isLoggedIn');
    console.log(`Navegacion: ${isLogged}`);
    console.log(`Navegación: ${isAuthenticated()}`);
    let resultado;
    // if (isAuthenticated()) {
    if (isLogged) {
      resultado = <a onClick={this.cerrarSesion}>Cerrar Sesión</a>;
    } else {
      resultado = <a onClick={this.iniciarSesion}>Iniciar Sesión</a>;
    }

    return (
      <nav className="navegacion">
        <NavLink to={`/nosotros`} activeClassName="activo">
          Nosotros
        </NavLink>
        <NavLink to={`/productos`} activeClassName="activo">
          Productos
        </NavLink>
        <NavLink to={`/contacto`} activeClassName="activo">
          Contacto
        </NavLink>
        {resultado}
      </nav>
    );
  }
}

export default Navegacion;
