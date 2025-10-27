import { useState } from "react";
import styles from "./Contato.module.css";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", { nome, idade, email, mensagem });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Contato</h1>

        <div className={styles.layout}>
          {/* Seção do Mapa - Coluna Esquerda */}
          <div className={styles.mapSection}>
            <div className={styles.mapPlaceholder}>
              {/* Placeholder do mapa - em produção, use Google Maps API */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="300" fill="#E5E5E5" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  fill="#999"
                  fontSize="18"
                  fontFamily="sans-serif"
                >
                  Google Maps
                </text>
              </svg>
            </div>

            <div className={styles.buttonsGroup}>
              <button className={`${styles.pillButton} ${styles.active}`}>
                Unidades Natal shopping
              </button>
              <button className={styles.pillButton}>Unidades Midway</button>
            </div>

            <p className={styles.address}>
              Avenida Senador Salgado Filho, 2234. Av. das Brancas Dunas, 47 -
              Candelária, Natal - RN, 59064-900
            </p>
          </div>

          {/* Seção do Formulário - Coluna Direita */}
          <div className={styles.formSection}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Vem falar com a gente!</h2>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="nome" className={styles.label}>
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    className={styles.input}
                    placeholder="João Maria"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="idade" className={styles.label}>
                    Idade
                  </label>
                  <input
                    type="number"
                    id="idade"
                    className={styles.input}
                    placeholder="23"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={styles.input}
                    placeholder="joao.maria@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mensagem" className={styles.label}>
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Escreva a sua mensagem..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={() => {
                      setNome("");
                      setIdade("");
                      setEmail("");
                      setMensagem("");
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Enviar
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.icon}
                    >
                      <path
                        d="M18.3327 1.66669L9.16602 10.8334"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3327 1.66669L12.4993 18.3334L9.16602 10.8334L1.66602 7.50002L18.3327 1.66669Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
