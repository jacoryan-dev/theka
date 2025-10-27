import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import styles from "./Cadastro.module.css";
import React, { useState } from "react";

const Cadastro: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nome, setNome] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
  };
  return (
    <AuthLayout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Cadastro</h1>
        <label htmlFor="nome" className={styles.label}>
          Nome
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Seu nome completo"
          className={styles.input}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
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
          >
            Cancelar
          </button>
          <button className={styles.submitButton} type="submit">
            Salvar
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Cadastro;
