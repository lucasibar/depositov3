export interface LoginCredentials {
  name: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  name: string;
  role: string;
}

export interface User {
  name: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

