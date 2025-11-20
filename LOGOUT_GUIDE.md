# 🚪 Funcionalidade de Logout Implementada

## ✅ O que foi implementado:

### 1. **Integração com AuthContext no Navbar**

O componente Navbar agora está integrado com o sistema de autenticação:

```typescript
// src/components/Navbar/Navbar.tsx
import { useAuth } from "../../hooks/useAuth";

export default function Navbar({ variant = "light" }: NavbarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout(); // Limpa tokens e estado de autenticação
    navigate("/Login"); // Redireciona para tela de login
  };
}
```

### 2. **Providers Configurados no App.tsx**

AuthProvider e ToastProvider foram adicionados ao App:

```typescript
// src/App.tsx
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./components/Toast";

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>{/* Suas rotas */}</Router>
      </ToastProvider>
    </AuthProvider>
  );
};
```

## 🔄 Fluxo de Logout

1. **Usuário clica no ícone de logout** no Navbar (desktop ou mobile)
2. **`handleLogout()` é executado**:
   - Fecha o menu mobile (se aberto)
   - Chama `logout()` do AuthContext
   - Remove `access_token` e `refresh_token` do localStorage
   - Atualiza estado de autenticação
3. **Redireciona para `/Login`** automaticamente

## 🎯 Componentes Afetados

### Navbar

- **Desktop**: Botão "Sair" com ícone de usuário
- **Mobile**: Botão "Sair" dentro do menu hambúrguer
- Ambos executam a mesma função `handleLogout()`

## 🔒 Páginas Protegidas (Próximo Passo)

Para proteger rotas que requerem autenticação, você pode criar um componente `PrivateRoute`:

```typescript
// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  return <>{children}</>;
}
```

### Uso no App.tsx:

```typescript
import { PrivateRoute } from "./components/PrivateRoute";

// Proteger rota de adicionar material
<Route
  path="/AddMaterial"
  element={
    <PrivateRoute>
      <MainLayout>
        <AddMaterial />
      </MainLayout>
    </PrivateRoute>
  }
/>;
```

## 📱 Exemplo de Uso Completo

### 1. Login

```typescript
// src/pages/Login/Login.tsx
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/"); // Redireciona para home após login
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };
}
```

### 2. Verificar Autenticação

```typescript
// Em qualquer componente
import { useAuth } from "../../hooks/useAuth";

export default function MeuComponente() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Olá, {user?.username}!</p>
      ) : (
        <p>Você não está logado</p>
      )}
    </div>
  );
}
```

### 3. Logout (já implementado)

O botão de logout no Navbar já está funcionando:

- ✅ Remove tokens do localStorage
- ✅ Limpa estado de autenticação
- ✅ Redireciona para `/Login`

## 🎨 Ícone de Logout

O ícone SVG representa um usuário e está estilizado conforme o design:

```tsx
<svg className={styles.logoutIcon} viewBox="0 0 26 26" fill="none">
  <path d="..." fill="currentColor" />
</svg>
```

**Cores por tema:**

- **Light/Dark**: Cor primária do tema
- **Pink**: Rosa/vinho do tema

## 🔧 Testando

1. **Fazer Login**: Vá para `/Login` e faça login
2. **Navegar**: Use a aplicação normalmente
3. **Logout**: Clique no ícone de "Sair" no Navbar
4. **Verificar**: Você deve ser redirecionado para `/Login`
5. **Confirmar**: Tokens devem ser removidos do localStorage

## 📊 Estado de Autenticação

O AuthContext gerencia:

- `user`: Dados do usuário logado (ou null)
- `loading`: Estado de carregamento
- `isAuthenticated`: Boolean indicando se está logado
- `login()`: Função para fazer login
- `logout()`: Função para fazer logout

## 🚀 Próximas Melhorias Sugeridas

1. ✅ **Logout implementado** - Funcionando!
2. 📝 **Adicionar toast ao logout** - Feedback visual
3. 🔒 **Criar rotas protegidas** - PrivateRoute component
4. 👤 **Buscar dados do usuário** - Após login
5. ⏱️ **Auto-logout** - Quando token expira
6. 🔄 **Refresh token automático** - Já implementado no axios

## 💡 Exemplo com Toast

Adicione feedback visual ao logout:

```typescript
import { useToast } from "../../hooks/useToast";

const { logout } = useAuth();
const { showInfo } = useToast();

const handleLogout = () => {
  setIsMenuOpen(false);
  logout();
  showInfo("Você saiu da sua conta com sucesso!");
  navigate("/Login");
};
```
