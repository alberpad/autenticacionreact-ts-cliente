import React from 'react';
// import Router from './components/Router';
import { makeMainRoutes } from './components/routes';

const routes = makeMainRoutes();

const App: React.FC = () => {
  return <div className="Contenedor">{routes}</div>;
};

export default App;
