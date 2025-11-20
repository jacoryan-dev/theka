# 🔔 Sistema de Notificações Toast

## 📋 Descrição

Sistema de mensagens toast/notificações implementado seguindo o design fornecido, com dois tipos de mensagens:

- **Info (Laranja)**: Para mensagens informativas (ex: recuperação de senha)
- **Success (Vinho)**: Para mensagens de sucesso (ex: contato enviado)

## 🎨 Componentes Criados

### 1. Toast (Componente Base)

- `src/components/Toast/Toast.tsx`
- `src/components/Toast/Toast.module.css`

### 2. ToastProvider (Gerenciador)

- `src/components/Toast/ToastContainer.tsx`

### 3. Hook useToast

- `src/hooks/useToast.ts`

## 🚀 Como Usar

### 1. Adicionar o ToastProvider no App

```typescript
// src/main.tsx ou src/App.tsx
import { ToastProvider } from "./components/Toast";

function App() {
  return <ToastProvider>{/* Seu app aqui */}</ToastProvider>;
}
```

### 2. Usar em Componentes

#### Mensagem de Recuperação de Senha (Laranja/Info)

```typescript
import { useToast } from './hooks/useToast';

function RecuperarSenha() {
  const { showInfo } = useToast();

  const handleSubmit = async (email: string) => {
    try {
      await authService.requestPasswordReset({ email });
      showInfo('Enviamos uma mensagem de recuperação de senha para o seu E-mail.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // seu formulário
  );
}
```

#### Mensagem de Sucesso ao Enviar Contato (Vinho/Success)

```typescript
import { useToast } from './hooks/useToast';

function Contato() {
  const { showSuccess } = useToast();

  const handleSubmit = async (data: ContatoData) => {
    try {
      await institucionalService.createContato(data);
      showSuccess('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // seu formulário
  );
}
```

### 3. Exemplo Completo - Recuperar Senha

```typescript
import { useState } from "react";
import { useToast } from "../../hooks/useToast";
import { authService } from "../../services";
import styles from "./RecuperarSenha.module.css";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showInfo } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.requestPasswordReset({ email });
      showInfo(
        "Enviamos uma mensagem de recuperação de senha para o seu E-mail."
      );
      setEmail("");
    } catch (error) {
      console.error("Erro ao solicitar recuperação:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Recuperar Senha"}
      </button>
    </form>
  );
}
```

### 4. Exemplo Completo - Contato

```typescript
import { useState } from "react";
import { useToast } from "../../hooks/useToast";
import { institucionalService } from "../../services";
import type { Contato } from "../../types";

export default function ContatoPage() {
  const [formData, setFormData] = useState<Contato>({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const { showSuccess } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await institucionalService.createContato(formData);
      showSuccess("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        placeholder="Nome"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="E-mail"
        required
      />
      <textarea
        value={formData.mensagem}
        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
        placeholder="Mensagem"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
```

## 📝 API do Hook useToast

```typescript
const { showToast, showInfo, showSuccess } = useToast();

// Mostrar toast genérico
showToast("Mensagem personalizada", "info"); // ou 'success'

// Atalho para mensagem info (laranja)
showInfo("Mensagem informativa");

// Atalho para mensagem success (vinho)
showSuccess("Operação realizada com sucesso!");
```

## 🎨 Cores e Estilos

### Mensagem Info (Laranja)

- Fundo do ícone: `#F78520`
- Cor do texto: `#F78520`
- Sombra: `0px 4px 4px rgba(247, 133, 32, 0.3)`

### Mensagem Success (Vinho)

- Fundo do ícone: `#81013A`
- Cor do texto: `#81013A`
- Sombra: `0px 4px 4px rgba(72, 0, 29, 0.2)`

## ⚙️ Configurações

### Duração

Por padrão, as mensagens desaparecem após 5 segundos. Para alterar:

```typescript
// No componente Toast.tsx, altere a prop duration
duration={5000} // tempo em milissegundos
```

### Posição

As mensagens aparecem no topo centralizado. Para alterar, edite o CSS:

```css
/* Toast.module.css */
.toastContainer {
  top: 40px; /* altere aqui */
  /* Para canto superior direito: */
  /* top: 20px; right: 20px; left: auto; transform: none; */
}
```

## 📱 Responsividade

O componente é totalmente responsivo e se adapta a telas menores automaticamente.

## 🎯 Casos de Uso

1. ✅ **Recuperação de senha** - Mensagem info após solicitar reset
2. ✅ **Contato enviado** - Mensagem success após enviar formulário
3. ✅ **Cadastro realizado** - Mensagem success
4. ✅ **Login realizado** - Mensagem success
5. ✅ **Operações da API** - Qualquer feedback necessário
