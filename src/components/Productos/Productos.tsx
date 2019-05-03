import React, { Component } from 'react';
import Auth0Authentication from '../../Auth/Auth';
import axios from 'axios';
import Producto, { IProductoData } from '../Producto/Producto';
import './Productos.css';
import Buscador from '../Buscador/Buscador';

interface IProductosProps {
  // productos: IProductoData[];
  // busquedaProducto: (termino: string) => void;
  auth: Auth0Authentication;
}
interface IProductosState {
  productos: IProductoData[];
  terminoBusqueda: string;
}
class Productos extends Component<IProductosProps, IProductosState> {
  state: IProductosState = {
    productos: [],
    terminoBusqueda: ''
  };

  componentDidMount() {
    this.queryAPI();
  }
  queryAPI = async () => {
    const { getAccessToken } = this.props.auth;
    const headers = { Authorization: `Bearer ${getAccessToken()}` };
    const url = 'http://localhost:3001/productos';
    const response = await axios.get(url, { headers });
    this.setState({
      productos: response.data
    });
  };

  login = () => {
    this.props.auth.login();
  };

  busquedaProducto = (busqueda: string) => {
    if (busqueda.length > 3) {
      let productos = [...this.state.productos];
      let resultado: any[];
      !busqueda
        ? (resultado = productos)
        : (resultado = productos.filter(
            (producto: IProductoData) =>
              producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !==
              -1
          ));

      this.setState({
        terminoBusqueda: busqueda,
        productos: resultado
      });
    } else {
      this.setState(
        {
          terminoBusqueda: ''
        },
        () => {
          this.queryAPI();
        }
      );
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const { productos } = this.state;
    const mostrarBotonLogin = (
      <div className="contenedor-boton">
        <p>Para ver el contenido debes estar logueado:</p>
        <a onClick={this.login} className="boton">
          Iniciar Sesión
        </a>
      </div>
    );
    return (
      <div className="productos">
        {isAuthenticated() && (
          <React.Fragment>
            <h2>Nuestros Productos</h2>
            <Buscador busqueda={this.busquedaProducto} />
            <ul className="lista-productos">
              {Object.keys(productos).map((key) => (
                <Producto key={key} producto={productos[Number(key)]} />
              ))}
            </ul>
          </React.Fragment>
        )}

        {!isAuthenticated() && mostrarBotonLogin}
      </div>
    );
  }
}

export default Productos;
