import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { normalizeRole, isAdmin } from '../utils/role.utils';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Los admins tienen acceso a todo
  if (isAdmin(user.role)) {
    return <>{children}</>;
  }

  // Verificar si el rol del usuario está en los roles permitidos
  if (allowedRoles && allowedRoles.length > 0) {
    const userRoleNormalized = normalizeRole(user.role);
    const hasAccess = allowedRoles.some((role) => 
      normalizeRole(role) === userRoleNormalized
    );

    if (!hasAccess) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
};

