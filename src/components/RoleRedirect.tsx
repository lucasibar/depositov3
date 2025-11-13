import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { isAdmin, isDeposito } from '../utils/role.utils';

export const RoleRedirect: React.FC = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Debug: mostrar el rol recibido (temporal)
  console.log('RoleRedirect - User role:', user.role);
  console.log('RoleRedirect - User object:', user);

  if (isDeposito(user.role)) {
    return <Navigate to="/deposito" replace />;
  }

  if (isAdmin(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // Si no coincide con ningún rol conocido, redirigir al dashboard si es admin o al login
  return <Navigate to="/login" replace />;
};

