import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import styles from "./RedefinirSenha.module.css";
import React, { useState } from "react";

const RedefinirSenha: React.FC = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
    }

    return (
        <AuthLayout>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Redefinir Senha</h1>
                <label htmlFor="password" className={styles.label}>Nova Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="******"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirmPassword" className={styles.label}>Confirmar Nova Senha</label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="******"
                    className={styles.input}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <div className={styles.buttonContainer}>
                    <button className={styles.prevButton} type="button" onClick={() => window.history.back()}>Voltar</button>
                    <button className={styles.submitButton} type="submit" >Salvar</button>
                </div>
            </form>
        </AuthLayout>
    )
}

export default RedefinirSenha;