import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import styles from "./RecuperarSenha.module.css";
import React, { useState } from "react";

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    console.log("E-mail para recuperação de senha:", email);
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
        <button className={styles.prevButton} type="button" onClick={() => window.history.back()}>Voltar</button>
        <button className={styles.submitButton} type="submit" >Enviar</button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default RecuperarSenha;