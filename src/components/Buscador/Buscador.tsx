import React from 'react';
import './Buscador.css';

type IBuscadorProps = {
  busqueda: (termino: string) => void;
};
function Buscador(props: IBuscadorProps) {
  function handleOnChangeBuscador(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const termino = e.currentTarget.value;
    props.busqueda(termino);
  }
  return (
    <form className="buscador">
      <input
        onChange={handleOnChangeBuscador}
        type="text"
        placeholder="Búsqueda"
      />
    </form>
  );
}

export default Buscador;
