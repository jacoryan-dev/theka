import { createContext, useState, useEffect, type ReactNode } from "react";
import { authService } from "../services/authService";
import type { User, LoginCredentials } from "../types";

interface AuthContextData {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export { AuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há token ao carregar
    const loadUser = async () => {
      const token = authService.getAccessToken();

      if (token) {
        try {
          // Aqui você pode fazer uma chamada para obter dados do usuário
          // const userData = await userService.getCurrentUser();
          // setUser(userData);

          // Por enquanto, apenas marcar como autenticado
          setUser({ id: 0, username: "user", email: "user@example.com" });
        } catch (error) {
          console.error("Erro ao carregar usuário:", error);
          authService.logout();
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      await authService.login(credentials);

      // Após login, você pode obter dados do usuário
      // const userData = await userService.getCurrentUser();
      // setUser(userData);

      // Por enquanto, apenas marcar como autenticado
      setUser({
        id: 0,
        username: credentials.username,
        email: "", // Email será obtido posteriormente se necessário
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
