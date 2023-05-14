import React, { Fragment } from 'react';
import AppRoutes from './routes';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Fragment>
      <Layout>
        <AppRoutes />
      </Layout>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <li>
            <Link to="/propiedades">Propiedades</Link>
          </li>
        </ul>
      </nav> */}
    </Fragment>
  );
}

export default App;
