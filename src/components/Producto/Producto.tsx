import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface IProductoData {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}
interface IProductoProps {
  producto: IProductoData;
}
class Producto extends Component<IProductoProps> {
  render() {
    const { id, nombre, precio, imagen } = this.props.producto;

    return (
      <li>
        <img src={`img/${imagen}.png`} alt={nombre} />
        <p>
          {nombre} <span>$ {precio}</span>
        </p>
        <Link to={`/productos/${id}`}>Más Información</Link>
      </li>
    );
  }
}

export default Producto;
