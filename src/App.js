import React, { Fragment } from 'react';
import AppRoutes from './routes';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Fragment>
      <Layout>
        <AppRoutes />
      </Layout>
    </Fragment>
  );
}

export default App;
