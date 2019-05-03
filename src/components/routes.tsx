import React from 'react';
import { Route, Router } from 'react-router-dom';

// Componentes Auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

// Componentes propios
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Header from './Header/Header';
import VerProducto from './VerProducto/VerProducto';
import Navegacion from './Navegacion/Navegacion';
import Contacto from './Contacto/Contacto';

const auth = new Auth();

const handleAuthentication = ({ location }: any) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <Navegacion auth={auth} />
        <Route
          exact
          path="/"
          render={(props) => <Productos auth={auth} {...props} />}
        />
        <Route
          exact
          path="/productos"
          render={(props) => (
            <Productos
              // productos={resultado}
              auth={auth}
              {...props}
            />
          )}
        />
        <Route exact path="/nosotros" component={Nosotros} />
        {/* <Route
          exact
          path="/productos/:productoId"
          render={(props) => {
            let idProducto = props.location.pathname.replace('/productos/', '');
            return (
              <VerProducto
                producto={this.state.productos[Number(idProducto)]}
                auth={auth}
                {...props}
              />
            );
          }}
        /> */}
        <Route
          exact
          path="/contacto"
          render={(props) => <Contacto auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
