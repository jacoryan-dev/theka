# 🔌 Integração com Backend - Theka

## 📦 Instalação

O projeto já está configurado com Axios.

## 🏗️ Estrutura de Serviços

```
src/
├── services/
│   ├── api.ts                    # Configuração base do Axios
│   ├── authService.ts            # Serviços de autenticação
│   ├── livrosService.ts          # Serviços de livros
│   ├── institucionalService.ts   # Serviços institucionais
│   └── index.ts                  # Exportações
├── contexts/
│   └── AuthContext.tsx           # Context de autenticação
├── hooks/
│   └── useAuth.ts                # Hook de autenticação
└── types/
    └── index.ts                  # Tipos TypeScript
```

## 🚀 Como Usar

### 1. Autenticação

#### Login

```typescript
import { authService } from "./services";

// Fazer login
try {
  const tokens = await authService.login({
    email: "usuario@example.com",
    password: "senha123",
  });
  console.log("Login realizado com sucesso!");
} catch (error) {
  console.error("Erro no login:", error);
}
```

#### Criar Usuário (Cadastro)

```typescript
import { userService } from "./services";

try {
  const newUser = await userService.createUser({
    username: "novousuario",
    email: "novo@example.com",
    password: "senha123",
    password_confirm: "senha123", // Campo obrigatório!
    first_name: "Nome",
    last_name: "Sobrenome",
  });
  console.log("Usuário criado:", newUser);
} catch (error) {
  console.error("Erro ao criar usuário:", error);
}
```

#### Recuperar Senha

```typescript
import { authService } from "./services";

// Etapa 1: Solicitar reset
await authService.requestPasswordReset({
  email: "usuario@example.com",
});

// Etapa 2: Confirmar reset com token
await authService.confirmPasswordReset({
  token: "token-recebido-por-email",
  new_password: "novaSenha123",
});
```

### 2. Livros

#### Listar Livros

```typescript
import { livrosService } from "./services";

// Buscar todos os livros
const response = await livrosService.getLivros();
console.log(response.results); // Array de livros

// Buscar com filtros
const filtrados = await livrosService.getLivros({
  search: "Dom Casmurro",
  genero_nome: "romance",
  ano_publicacao: 2020,
  ordering: "titulo",
  page: 1,
  page_size: 10,
});
```

#### Obter Livro por ID

```typescript
const livro = await livrosService.getLivro(1);
console.log(livro);
```

#### Criar Livro

```typescript
const novoLivro = await livrosService.createLivro({
  titulo: "Novo Livro",
  autor: "Autor",
  isbn: "978-3-16-148410-0",
  ano_publicacao: 2024,
  descricao: "Descrição do livro",
  genero: 1, // ID do gênero
  editora: 1, // ID da editora
  capa: fileInput.files[0], // Arquivo de imagem
});
```

#### Atualizar Livro

```typescript
const livroAtualizado = await livrosService.updateLivro(1, {
  titulo: "Título Atualizado",
  descricao: "Nova descrição",
});
```

#### Deletar Livro

```typescript
await livrosService.deleteLivro(1);
```

#### Novidades da Semana

```typescript
const novidades = await livrosService.getNovidades();
console.log(novidades);
```

#### Gêneros e Editoras

```typescript
// Listar gêneros
const generos = await livrosService.getGeneros();

// Criar gênero
const novoGenero = await livrosService.createGenero("Ficção Científica");

// Listar editoras
const editoras = await livrosService.getEditoras();

// Criar editora
const novaEditora = await livrosService.createEditora("Editora XYZ");
```

### 3. Institucional

#### Estatísticas da Biblioteca

```typescript
import { institucionalService } from "./services";

const stats = await institucionalService.getEstatisticas();
console.log(stats);
// { total_livros: 150, total_autores: 80, total_generos: 15, ... }
```

#### Sobre Nós

```typescript
const sobreNos = await institucionalService.getSobreNos();
console.log(sobreNos);
```

#### Nossa História

```typescript
const historia = await institucionalService.getNossaHistoria();
console.log(historia);
```

#### Membros da Equipe

```typescript
// Listar membros
const membros = await institucionalService.getMembrosEquipe();

// Criar membro
const novoMembro = await institucionalService.createMembroEquipe({
  nome: "João Silva",
  cargo: "Desenvolvedor",
  bio: "Descrição do membro",
});

// Atualizar membro
await institucionalService.updateMembroEquipe(1, {
  cargo: "Desenvolvedor Sênior",
});

// Deletar membro
await institucionalService.deleteMembroEquipe(1);
```

#### Nossos Valores

```typescript
const valores = await institucionalService.getNossosValores();
```

#### Tópicos

```typescript
const topicos = await institucionalService.getTopicos();
```

#### Contato

```typescript
// Enviar mensagem de contato
await institucionalService.createContato({
  nome: "Maria Silva",
  email: "maria@example.com",
  mensagem: "Gostaria de mais informações...",
});
```

### 4. Context de Autenticação

#### Configurar no App

```typescript
// src/main.tsx
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
```

#### Usar em Componentes

```typescript
import { useAuth } from "./hooks/useAuth";

function MeuComponente() {
  const { user, isAuthenticated, login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login({
        email: "usuario@example.com",
        password: "senha123",
      });
      // Redirecionar ou atualizar UI
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Olá, {user?.username}!</p>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <button onClick={handleLogin}>Entrar</button>
      )}
    </div>
  );
}
```

## 🔒 Autenticação Automática

O sistema já está configurado para:

- ✅ Salvar tokens JWT automaticamente no localStorage
- ✅ Adicionar token em todas as requisições
- ✅ Renovar token automaticamente quando expirado
- ✅ Redirecionar para login quando não autenticado

## 📝 Tratamento de Erros

```typescript
try {
  const livros = await livrosService.getLivros();
} catch (error) {
  // error é do tipo ApiError
  console.error(error.message);
  console.error(error.details); // Detalhes específicos da API
}
```

## 🌐 URL Base da API

A URL base está configurada como: `https://thekaapi.pythonanywhere.com`

Para alterar, edite o arquivo `src/services/api.ts`:

```typescript
const API_BASE_URL = "http://localhost:8000"; // ou outra URL
```

## 📊 Exemplo Completo: Página de Acervo

```typescript
import { useEffect, useState } from "react";
import { livrosService } from "./services";
import type { Livro } from "./types";

function Acervo() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await livrosService.getLivros({ search });
        setLivros(response.results);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, [search]);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar livros..."
      />

      <div>
        {livros.map((livro) => (
          <div key={livro.id}>
            <h3>{livro.titulo}</h3>
            <p>{livro.autor}</p>
            <p>{livro.genero.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 🎯 Próximos Passos

1. ✅ Integração configurada
2. 📝 Implementar páginas com chamadas à API
3. 🎨 Adicionar loading states
4. ⚠️ Implementar tratamento de erros
5. 🔄 Adicionar refresh automático de dados

## 📚 Recursos

- **Documentação da API**: https://thekaapi.pythonanywhere.com/docs/
- **Axios Docs**: https://axios-http.com/docs/intro
