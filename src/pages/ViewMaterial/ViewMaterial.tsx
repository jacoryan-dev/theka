import React from "react";
import styles from "./ViewMaterial.module.css";

interface ViewMaterialProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  material: {
    title: string;
    author: string;
    year: number;
    pages: string;
    publisher: string;
    summary: string;
    coverImage: string;
  };
}

const ViewMaterial: React.FC<ViewMaterialProps> = ({
  isOpen,
  onClose,
  onEdit,
  material,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay para desktop modal */}
      <div className={styles.overlay} onClick={onClose}></div>

      {/* Container principal */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Botão fechar */}
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Fechar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Seção da capa */}
          <div className={styles.coverSection}>
            <img
              src={material.coverImage}
              alt={material.title}
              className={styles.coverImage}
            />
          </div>

          {/* Seção de informações */}
          <div className={styles.infoSection}>
            <h1 className={styles.title}>{material.title}</h1>
            <p className={styles.authorYear}>
              {material.author}, {material.year}
            </p>

            <p className={styles.summary}>{material.summary}</p>

            <div className={styles.metadata}>
              <p className={styles.pages}>páginas: {material.pages}</p>
              <p className={styles.publisher}>{material.publisher}</p>
            </div>

            {/* Botão Editar */}
            <button 
              className={styles.editButton} 
              onClick={onEdit}
              aria-label="Editar material"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21.5766 6.61309L17.3869 2.42434C17.0353 2.07283 16.5584 1.87537 16.0613 1.87537C15.5641 1.87537 15.0872 2.07283 14.7356 2.42434L3.17438 13.9847C2.99968 14.1583 2.86116 14.3649 2.76686 14.5924C2.67255 14.82 2.62434 15.064 2.62501 15.3103V19.5C2.62501 19.9972 2.82255 20.4742 3.17418 20.8258C3.52581 21.1774 4.00273 21.375 4.50001 21.375H20.25C20.5484 21.375 20.8345 21.2564 21.0455 21.0455C21.2565 20.8345 21.375 20.5483 21.375 20.25C21.375 19.9516 21.2565 19.6654 21.0455 19.4545C20.8345 19.2435 20.5484 19.125 20.25 19.125H11.7188L21.5766 9.26528C21.7508 9.09116 21.8889 8.88443 21.9832 8.65689C22.0775 8.42936 22.126 8.18548 22.126 7.93918C22.126 7.69289 22.0775 7.44901 21.9832 7.22148C21.8889 6.99394 21.7508 6.78721 21.5766 6.61309ZM8.53126 19.125H4.87501V15.4687L12.75 7.59372L16.4063 11.25L8.53126 19.125ZM18 9.65622L14.3438 5.99997L16.0631 4.28059L19.7194 7.93684L18 9.65622Z"
                  fill="white"
                />
              </svg>
              Editar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMaterial;