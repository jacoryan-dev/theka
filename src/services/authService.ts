import api from "./api";
import type {
  LoginCredentials,
  TokenResponse,
  User,
  CreateUserData,
  PasswordResetRequest,
  PasswordResetConfirm,
} from "../types";

export const authService = {
  // Login - Obter token JWT
  async login(credentials: LoginCredentials): Promise<TokenResponse> {
    const response = await api.post<TokenResponse>("/auth/token/", credentials);

    // Salvar tokens no localStorage
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);

    return response.data;
  },

  // Logout
  logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  // Verificar se está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem("access_token");
  },

  // Obter token de acesso
  getAccessToken(): string | null {
    return localStorage.getItem("access_token");
  },

  // Refresh token
  async refreshToken(): Promise<TokenResponse> {
    const refreshToken = localStorage.getItem("refresh_token");

    if (!refreshToken) {
      throw new Error("Refresh token não encontrado");
    }

    const response = await api.post<TokenResponse>("/auth/token/refresh/", {
      refresh: refreshToken,
    });

    localStorage.setItem("access_token", response.data.access);
    return response.data;
  },

  // Solicitar recuperação de senha
  async requestPasswordReset(data: PasswordResetRequest): Promise<void> {
    await api.post("/auth/password/reset/", data);
  },

  // Confirmar recuperação de senha
  async confirmPasswordReset(data: PasswordResetConfirm): Promise<void> {
    await api.post("/auth/password/reset/confirm/", data);
  },
};

export const userService = {
  // Criar novo usuário
  async createUser(data: CreateUserData): Promise<User> {
    // Remover campos vazios opcionais
    const cleanData: Record<string, unknown> = {
      username: data.username,
      email: data.email,
      password: data.password,
      password_confirm: data.password_confirm,
    };

    if (data.first_name) {
      cleanData.first_name = data.first_name;
    }
    if (data.last_name) {
      cleanData.last_name = data.last_name;
    }

    const response = await api.post<User>("/users/", cleanData);
    return response.data;
  },

  // Obter usuário atual
  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>("/users/me/");
    return response.data;
  },

  // Atualizar usuário
  async updateUser(id: number, data: Partial<CreateUserData>): Promise<User> {
    const response = await api.patch<User>(`/users/${id}/`, data);
    return response.data;
  },
};
