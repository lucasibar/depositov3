import { useNavigate } from 'react-router-dom';
import './Unauthorized.css';

export const Unauthorized: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <h1>403</h1>
        <h2>Acceso No Autorizado</h2>
        <p>No tienes permisos para acceder a esta página.</p>
        <button onClick={() => navigate('/dashboard')} className="back-button">
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
};

