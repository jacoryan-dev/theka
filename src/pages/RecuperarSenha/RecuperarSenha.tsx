import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import styles from "./RecuperarSenha.module.css";
import React, { useState } from "react";
import { authService } from "../../services/authService";
import { useToast } from "../../hooks/useToast";

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showInfo } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.requestPasswordReset({ email });
      showInfo(
        "E-mail de recuperação enviado! Verifique sua caixa de entrada."
      );
      setEmail("");
    } catch (error: unknown) {
      console.error("Erro ao solicitar recuperação de senha:", error);
      showInfo(
        "Erro ao enviar e-mail de recuperação. Verifique o endereço informado."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Recuperar Senha</h1>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          className={styles.input}
          type="email"
          placeholder="seuemail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={styles.buttonContainer}>
          <button
            className={styles.prevButton}
            type="button"
            onClick={() => window.history.back()}
          >
            Voltar
          </button>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RecuperarSenha;
