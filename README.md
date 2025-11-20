# 📚 Theka - Sistema de Gestão de Biblioteca

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

Uma plataforma moderna e intuitiva para gerenciamento de acervos bibliográficos, desenvolvida com as melhores práticas de desenvolvimento web.

[Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação) • [Estrutura](#-estrutura-do-projeto) • [API](#-integração-com-api) • [Contribuir](#-como-contribuir)

</div>

---

## ✨ Funcionalidades

### 🔐 Autenticação e Gestão de Usuários

- Sistema completo de autenticação com JWT
- Registro de novos usuários
- Login seguro com validação
- Recuperação e redefinição de senha
- Gerenciamento de sessões

### 📖 Gestão do Acervo

- **Catálogo Completo**: Visualização de todos os livros disponíveis
- **Novidades da Semana**: Destaque para os últimos livros adicionados
- **Busca Avançada**: Pesquisa por título, autor ou ISBN
- **Filtros Inteligentes**: Filtragem por gênero e editora
- **CRUD Completo**:
  - ✅ Adicionar novos livros
  - ✅ Editar informações existentes
  - ✅ Excluir livros do acervo
  - ✅ Visualizar detalhes completos

### 📝 Gestão de Dados

- **Gêneros Literários**: Categorização por gêneros
- **Editoras**: Registro de editoras associadas
- **Upload de Capas**: Suporte para imagens de capa dos livros
- **Validação de Dados**: Verificação de ISBN e ano de publicação

### 🏢 Páginas Institucionais

- **Sobre Nós**: Informações sobre a biblioteca
- **Contato**: Formulário de contato integrado
- **Interface Responsiva**: Design adaptável para todos os dispositivos

### 🎨 Interface do Usuário

- Design moderno e intuitivo
- Navegação fluida com animações suaves
- Sistema de notificações (toasts) para feedback
- Modo mobile-first com responsividade completa
- Tema personalizado com cores institucionais

---

## 🚀 Tecnologias

### Core

- **React 19.1.1** - Biblioteca JavaScript para interfaces
- **TypeScript 5.9.3** - Tipagem estática para JavaScript
- **Vite 7.1.7** - Build tool e dev server ultra-rápido
- **React Router DOM 7.9.4** - Roteamento de páginas

### UI/UX

- **Bootstrap 5.3.8** - Framework CSS responsivo
- **CSS Modules** - Estilos encapsulados e reutilizáveis
- **React Bootstrap 2.10.10** - Componentes React do Bootstrap
- **ClassNames 2.5.1** - Utilitário para classes condicionais

### HTTP & API

- **Axios 1.13.2** - Cliente HTTP para requisições à API
- **FormData** - Upload de arquivos (capas de livros)
- **JWT** - Autenticação via tokens

### Desenvolvimento

- **ESLint** - Linting e padronização de código
- **TypeScript ESLint** - Regras específicas para TypeScript

---

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

### Passo a passo

1. **Clone o repositório**

```bash
git clone https://github.com/jacoryan-dev/theka.git
cd theka
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto (se necessário):

```env
VITE_API_URL=https://thekaapi.pythonanywhere.com
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Acesse a aplicação**

Abra seu navegador em `http://localhost:5173`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Linting
npm run lint         # Executa ESLint

# Preview
npm run preview      # Visualiza o build de produção
```

---

## 📁 Estrutura do Projeto

```
theka/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Footer/        # Rodapé da aplicação
│   │   ├── Navbar/        # Barra de navegação
│   │   └── Toast/         # Sistema de notificações
│   ├── hooks/             # Custom hooks
│   │   └── useToast.ts    # Hook para notificações
│   ├── layouts/           # Layouts principais
│   │   ├── AuthLayout/    # Layout para autenticação
│   │   └── MainLayout/    # Layout principal
│   ├── pages/             # Páginas da aplicação
│   │   ├── Acervo/        # Catálogo de livros
│   │   ├── AddMaterial/   # Adicionar livro
│   │   ├── Cadastro/      # Registro de usuário
│   │   ├── Contato/       # Página de contato
│   │   ├── EditMaterial/  # Editar livro
│   │   ├── Inicio/        # Página inicial
│   │   ├── Login/         # Login
│   │   ├── RecuperarSenha/  # Recuperação de senha
│   │   ├── RedefinirSenha/  # Redefinição de senha
│   │   ├── SobreNos/      # Sobre nós
│   │   └── ViewMaterial/  # Visualizar livro
│   ├── services/          # Serviços de API
│   │   ├── api.ts         # Configuração do Axios
│   │   ├── authService.ts # Serviços de autenticação
│   │   ├── institucionalService.ts  # Serviços institucionais
│   │   └── livrosService.ts  # Serviços de livros
│   ├── types/             # Definições TypeScript
│   │   └── index.ts       # Interfaces e tipos
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── README.md             # Documentação
```

---

## 🔌 Integração com API

A aplicação se conecta a uma API REST hospedada em:

```
https://thekaapi.pythonanywhere.com
```

### Endpoints Principais

#### Autenticação

- `POST /auth/login/` - Login de usuário
- `POST /auth/register/` - Registro de novo usuário
- `POST /auth/password/reset/` - Solicitar recuperação de senha
- `POST /auth/password/reset/confirm/` - Confirmar redefinição de senha

#### Livros

- `GET /livros/` - Listar livros (com filtros e paginação)
- `GET /livros/novidades/` - Livros mais recentes
- `GET /livros/{id}/` - Detalhes de um livro
- `POST /livros/` - Adicionar novo livro
- `PATCH /livros/{id}/` - Atualizar livro
- `DELETE /livros/{id}/` - Excluir livro

#### Gêneros e Editoras

- `GET /generos/` - Listar gêneros
- `POST /generos/` - Criar gênero
- `GET /editoras/` - Listar editoras
- `POST /editoras/` - Criar editora

#### Institucional

- `GET /institucional/contato/` - Listar contatos
- `POST /institucional/contato/` - Enviar mensagem de contato

### Autenticação

A aplicação utiliza JWT (JSON Web Tokens) para autenticação:

```typescript
// Exemplo de uso
import { authService } from "./services/authService";

// Login
const response = await authService.login({
  username: "usuario",
  password: "senha123",
});

// Token armazenado automaticamente no localStorage
// Todas as requisições subsequentes incluem o token
```

---

## 🎨 Guia de Estilo

### Cores Principais

```css
--primary-wine: #81013a; /* Vinho principal */
--primary-orange: #f78520; /* Laranja principal */
--secondary-pink: #f9e4ed; /* Rosa secundário */
--text-dark: #333333; /* Texto escuro */
--text-muted: #666666; /* Texto esmaecido */
```

### Tipografia

- **Fonte Principal**: DM Sans
- **Fonte Alternativa**: Inter
- **Mobile First**: Design responsivo iniciando do mobile

---

## 🧪 Testes

```bash
# Executar testes (quando implementados)
npm run test
```

---

## 📝 Convenções de Código

### TypeScript

- Utilizar interfaces para definir tipos
- Preferir `const` ao invés de `let`
- Usar optional chaining (`?.`) e nullish coalescing (`??`)

### React

- Componentes funcionais com hooks
- Props tipadas com TypeScript
- CSS Modules para estilos isolados
- Naming convention: PascalCase para componentes

### CSS

- Mobile-first approach
- BEM naming convention para classes
- Variáveis CSS para cores e espaçamentos
- Media queries em ordem crescente

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Diretrizes

- Escreva mensagens de commit claras e descritivas
- Mantenha o código limpo e bem documentado
- Siga as convenções de código do projeto
- Adicione testes para novas funcionalidades

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👥 Autores

- **Equipe Theka** - [GitHub](https://github.com/jacoryan-dev)

---

## 📞 Suporte

Para questões e suporte:

- 📧 Email: contato@theka.com
- 🌐 Website: [theka.com](https://theka.com)
- 📱 WhatsApp: (84) 99999-9999

---

## 🙏 Agradecimentos

- Equipe de desenvolvimento
- Comunidade React
- Contribuidores do projeto

---

<div align="center">
© 2025 EJECT. Todos os direitos reservados.

</div>
