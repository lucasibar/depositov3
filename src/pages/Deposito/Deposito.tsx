import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/auth.slice';
import './Deposito.css';

export const Deposito: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="deposito-container">
      <header className="deposito-header">
        <h1>Panel de Depósito</h1>
        <div className="user-info">
          <span>Bienvenido, {user?.name}</span>
          <span className="user-role">({user?.role})</span>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="deposito-content">
        <div className="deposito-card">
          <h2>Área de Depósito</h2>
          <p>Acceso restringido a las funcionalidades de depósito.</p>
          <div className="deposito-features">
            <div className="feature-item">✓ Gestión de Stock</div>
            <div className="feature-item">✓ Movimientos de Inventario</div>
            <div className="feature-item">✓ Consulta de Posiciones</div>
          </div>
        </div>
      </main>
    </div>
  );
};

