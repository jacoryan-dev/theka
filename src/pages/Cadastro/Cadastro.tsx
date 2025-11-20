import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import styles from "./Cadastro.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services";
import { useToast } from "../../hooks/useToast";

const Cadastro: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showInfo } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showInfo("As senhas não coincidem!");
      return;
    }

    // Validação adicional
    if (password.length < 8) {
      showInfo("A senha deve ter no mínimo 8 caracteres!");
      return;
    }

    setLoading(true);

    try {
      const userData = {
        username,
        email,
        password,
        password_confirm: confirmPassword,
        first_name: firstName || undefined,
        last_name: lastName || undefined,
      };

      console.log("Enviando dados:", {
        ...userData,
        password: "***",
        password_confirm: "***",
      });

      const newUser = await userService.createUser(userData);

      console.log("Usuário criado:", newUser);
      showInfo("Cadastro realizado com sucesso!");

      // Redirecionar para login após 2 segundos
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (error: unknown) {
      console.error("Erro completo ao criar usuário:", error);

      // Mostrar mensagem de erro específica
      const err = error as {
        details?: Record<string, string[]>;
        message?: string;
      };

      // Coletar todas as mensagens de erro
      const errorMessages: string[] = [];

      if (err?.details) {
        Object.entries(err.details).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            errorMessages.push(`${field}: ${msg}`);
          });
        });
      }

      const errorMessage =
        errorMessages.length > 0
          ? errorMessages.join("\n")
          : err?.message || "Erro ao criar conta. Tente novamente.";

      console.log("Mensagem de erro:", errorMessage);
      showInfo(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Cadastro</h1>

        <label htmlFor="username" className={styles.label}>
          Nome de usuário
        </label>
        <input
          type="text"
          id="username"
          placeholder="usuario123"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="firstName" className={styles.label}>
          Nome
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Seu nome"
          className={styles.input}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName" className={styles.label}>
          Sobrenome
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Seu sobrenome"
          className={styles.input}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="seuemail@email.com"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className={styles.label}>
          Senha
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword" className={styles.label}>
          Confirmar Senha
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="********"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className={styles.buttonContainer}>
          <button
            className={styles.prevButton}
            type="button"
            onClick={() => window.history.back()}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Cadastro;
