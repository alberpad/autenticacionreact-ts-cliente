import React from 'react';

import './Contacto.css';

function Contacto() {
  return (
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
  );
}

export default Contacto;
