import { Link } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <li>
            <Link to="/propiedades">Propiedades</Link>
          </li>
        </ul>
      </nav>

      <AppRoutes />
    </div>
  );
}

export default App;
