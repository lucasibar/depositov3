import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/slices/auth.slice';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Panel de Administración</h1>
        <div className="user-info">
          <span>Bienvenido, {user.name}</span>
          <span className="user-role">({user.role})</span>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Acceso Completo</h2>
          <p>Como administrador, tienes acceso a todas las funcionalidades del sistema.</p>
          <div className="features-list">
            <div className="feature-item">✓ Gestión de Usuarios</div>
            <div className="feature-item">✓ Gestión de Inventario</div>
            <div className="feature-item">✓ Reportes y Análisis</div>
            <div className="feature-item">✓ Configuración del Sistema</div>
          </div>
        </div>
      </main>
    </div>
  );
};

