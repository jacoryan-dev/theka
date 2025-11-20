import { useState } from "react";
import styles from "./Contato.module.css";
import { institucionalService } from "../../services/institucionalService";
import { useToast } from "../../hooks/useToast";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showInfo } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !telefone || !email || !mensagem) {
      showInfo("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);

    try {
      await institucionalService.createContato({
        nome,
        telefone,
        email,
        mensagem,
      });

      showSuccess("Mensagem enviada com sucesso!"); // Limpar formulário
      setNome("");
      setTelefone("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      showInfo("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>Contato</h1>

        <div className={styles.layout}>
          {/* Seção do Mapa - Coluna Esquerda */}
          <div className={styles.mapSection}>
            <div className={styles.mapPlaceholder}>
              {/* Iframe do Google Maps (Natal Shopping) */}
              <iframe
                title="Natal Shopping - Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.10026718908!2d-35.21311618943405!3d-5.841490194117363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff7f3f79710b%3A0xf5c081aadff4a4d9!2sNatal%20Shopping%20-%20Avenida%20Senador%20Salgado%20Filho%2C%202234%20-%20Lagoa%20Nova%2C%20Natal%20-%20RN%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1762022087720!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                  <label htmlFor="telefone" className={styles.label}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    className={styles.input}
                    placeholder="(84) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
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
                      setTelefone("");
                      setEmail("");
                      setMensagem("");
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
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
