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
