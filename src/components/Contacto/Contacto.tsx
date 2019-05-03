import React from 'react';
import Auth0Authentication from '../../Auth/Auth';

import './Contacto.css';

interface IContactoProps {
  auth: Auth0Authentication;
}
class Contacto extends React.Component<IContactoProps> {
  login = () => {
    this.props.auth.login();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const mostrarBotonLogin = (
      <div className="contenedor-boton">
        <p>Para ver el contenido debes estar logueado:</p>
        <a onClick={this.login} className="boton">
          Iniciar Sesión
        </a>
      </div>
    );
    return (
      <React.Fragment>
        {isAuthenticated() && (
          <form>
            <legend>Formulario de Conctacto</legend>
            <div className="input-field">
              <label>Nombre:</label>
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-field">
              <label>Email:</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <label>Mensaje:</label>
              <textarea />
            </div>
            <div className="input-field enviar">
              <input type="submit" value="Enviar" />
            </div>
          </form>
        )}

        {!isAuthenticated() && mostrarBotonLogin}
      </React.Fragment>
    );
  }
}

export default Contacto;
