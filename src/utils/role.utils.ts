export const normalizeRole = (role: string | undefined | null): string => {
  if (!role) return '';
  return role.toLowerCase().trim();
};

export const isAdmin = (role: string | undefined | null): boolean => {
  const normalized = normalizeRole(role);
  return normalized === 'admin' || normalized === 'administrador';
};

export const isDeposito = (role: string | undefined | null): boolean => {
  const normalized = normalizeRole(role);
  return normalized === 'deposito' || normalized === 'depósito';
};

