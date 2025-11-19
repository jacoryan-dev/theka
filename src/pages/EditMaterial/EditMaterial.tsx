import React, { useState } from "react";
import styles from "./EditMaterial.module.css";

interface EditMaterialProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (material: MaterialData) => void;
  onDelete: () => void;
  initialData: MaterialData;
}

export interface MaterialData {
  title: string;
  author: string;
  pages: string;
  isbn: string;
  year: string;
  publisher: string;
  summary: string;
  coverImage?: string | File | null;
}

const EditMaterial: React.FC<EditMaterialProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  initialData,
}) => {
  const [formData, setFormData] = useState<MaterialData>(initialData);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData(initialData);
    setShowDeleteConfirm(false);
    onClose();
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    handleClose();
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay para desktop modal */}
      <div className={styles.overlay} onClick={handleClose}></div>

      {/* Container principal */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Editar material</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formLayout}>
              {/* Área de exibição da capa */}
              <div className={styles.imageSection}>
                <div className={styles.imageBox}>
                  {typeof formData.coverImage === "string" && formData.coverImage ? (
                    <img
                      src={formData.coverImage}
                      alt={formData.title}
                      className={styles.coverImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <svg width="54" height="46" viewBox="0 0 54 46" fill="none">
                        <path
                          d="M34.4531 12.7969C34.4531 12.0181 34.6841 11.2568 35.1167 10.6093C35.5494 9.9618 36.1643 9.45712 36.8838 9.1591C37.6033 8.86108 38.395 8.7831 39.1588 8.93503C39.9226 9.08696 40.6242 9.46197 41.1749 10.0126C41.7255 10.5633 42.1005 11.2649 42.2525 12.0287C42.4044 12.7925 42.3264 13.5842 42.0284 14.3037C41.7304 15.0232 41.2257 15.6381 40.5782 16.0708C39.9307 16.5034 39.1694 16.7344 38.3906 16.7344C37.3463 16.7344 36.3448 16.3195 35.6064 15.5811C34.868 14.8427 34.4531 13.8412 34.4531 12.7969ZM53.1562 4.92188V30.5156C53.1562 31.821 52.6377 33.0729 51.7147 33.9959C50.7916 34.9189 49.5397 35.4375 48.2344 35.4375H45.2812V40.3594C45.2812 41.6647 44.7627 42.9166 43.8397 43.8397C42.9166 44.7627 41.6647 45.2812 40.3594 45.2812H4.92188C3.61651 45.2812 2.36461 44.7627 1.44158 43.8397C0.518553 42.9166 0 41.6647 0 40.3594V12.7969C0 11.4915 0.518553 10.2396 1.44158 9.31658C2.36461 8.39355 3.61651 7.875 4.92188 7.875H9.84375V4.92188C9.84375 3.61651 10.3623 2.36461 11.2853 1.44158C12.2084 0.518553 13.4603 0 14.7656 0H48.2344C49.5397 0 50.7916 0.518553 51.7147 1.44158C52.6377 2.36461 53.1562 3.61651 53.1562 4.92188ZM39.375 35.4375H14.7656C13.4603 35.4375 12.2084 34.9189 11.2853 33.9959C10.3623 33.0729 9.84375 31.821 9.84375 30.5156V13.7812H5.90625V39.375H39.375V35.4375ZM34.0446 29.5312L25.5938 21.0804L17.1429 29.5312H34.0446ZM47.25 5.90625H15.75V22.5717L22.114 16.2077C23.037 15.285 24.2886 14.7667 25.5938 14.7667C26.8989 14.7667 28.1505 15.285 29.0735 16.2077L42.397 29.5312H47.25V5.90625Z"
                          fill="#393939"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Campos do formulário */}
              <div className={styles.fieldsSection}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="title" className={styles.label}>
                      Título no material:
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Inserir o título do material"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroupSmall}>
                    <label htmlFor="pages" className={styles.label}>
                      Número de páginas
                    </label>
                    <input
                      type="text"
                      id="pages"
                      name="pages"
                      value={formData.pages}
                      onChange={handleInputChange}
                      placeholder="000"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroupSmall}>
                    <label htmlFor="isbn" className={styles.label}>
                      ISBM
                    </label>
                    <input
                      type="text"
                      id="isbn"
                      name="isbn"
                      value={formData.isbn}
                      onChange={handleInputChange}
                      placeholder="xxxxxxx"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="author" className={styles.label}>
                      Autor:
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="Machado de Assis"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroupSmall}>
                    <label htmlFor="year" className={styles.label}>
                      Ano de publicação
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="000"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroupSmall}>
                    <label htmlFor="publisher" className={styles.label}>
                      Editora
                    </label>
                    <select
                      id="publisher"
                      name="publisher"
                      value={formData.publisher}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option value="">Selecionar</option>
                      <option value="Companhia das Letras">Companhia das Letras</option>
                      <option value="Record">Record</option>
                      <option value="Globo Livros">Globo Livros</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="summary" className={styles.label}>
                    Resumo do material:
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    placeholder="Inserir um breve resumo do material."
                    className={styles.textarea}
                    rows={5}
                  />
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            {!showDeleteConfirm ? (
              <div className={styles.actions}>
                <button
                  type="button"
                  onClick={handleDeleteClick}
                  className={styles.deleteButton}
                >
                  <svg width="19" height="21" viewBox="0 0 19 21" fill="none">
                    <path
                      d="M17.625 3.75H14.25V2.625C14.25 1.92881 13.9734 1.26113 13.4812 0.768845C12.9889 0.276562 12.3212 0 11.625 0H7.125C6.42881 0 5.76113 0.276562 5.26884 0.768845C4.77656 1.26113 4.5 1.92881 4.5 2.625V3.75H1.125C0.826631 3.75 0.540483 3.86853 0.329505 4.0795C0.118526 4.29048 0 4.57663 0 4.875C0 5.17337 0.118526 5.45952 0.329505 5.6705C0.540483 5.88147 0.826631 6 1.125 6H1.5V18.75C1.5 19.2473 1.69754 19.7242 2.04917 20.0758C2.40081 20.4275 2.87772 20.625 3.375 20.625H15.375C15.8723 20.625 16.3492 20.4275 16.7008 20.0758C17.0525 19.7242 17.25 19.2473 17.25 18.75V6H17.625C17.9234 6 18.2095 5.88147 18.4205 5.6705C18.6315 5.45952 18.75 5.17337 18.75 4.875C18.75 4.57663 18.6315 4.29048 18.4205 4.0795C18.2095 3.86853 17.9234 3.75 17.625 3.75ZM6.75 2.625C6.75 2.52554 6.78951 2.43016 6.85983 2.35984C6.93016 2.28951 7.02554 2.25 7.125 2.25H11.625C11.7245 2.25 11.8198 2.28951 11.8902 2.35984C11.9605 2.43016 12 2.52554 12 2.625V3.75H6.75V2.625ZM15 18.375H3.75V6H15V18.375ZM8.25 9V15C8.25 15.2984 8.13147 15.5845 7.9205 15.7955C7.70952 16.0065 7.42337 16.125 7.125 16.125C6.82663 16.125 6.54048 16.0065 6.3295 15.7955C6.11853 15.5845 6 15.2984 6 15V9C6 8.70163 6.11853 8.41548 6.3295 8.2045C6.54048 7.99353 6.82663 7.875 7.125 7.875C7.42337 7.875 7.70952 7.99353 7.9205 8.2045C8.13147 8.41548 8.25 8.70163 8.25 9ZM12.75 9V15C12.75 15.2984 12.6315 15.5845 12.4205 15.7955C12.2095 16.0065 11.9234 16.125 11.625 16.125C11.3266 16.125 11.0405 16.0065 10.8295 15.7955C10.6185 15.5845 10.5 15.2984 10.5 15V9C10.5 8.70163 10.6185 8.41548 10.8295 8.2045C11.0405 7.99353 11.3266 7.875 11.625 7.875C11.9234 7.875 12.2095 7.99353 12.4205 8.2045C12.6315 8.41548 12.75 8.70163 12.75 9Z"
                      fill="white"
                    />
                  </svg>
                  Deletar
                </button>

                <div className={styles.rightActions}>
                  <button type="button" onClick={handleClose} className={styles.cancelButton}>
                    Cancelar
                  </button>
                  <button type="submit" className={styles.saveButton}>
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none">
                      <path
                        d="M12.375 0H1.875C1.37772 0 0.900806 0.197544 0.549175 0.549175C0.197544 0.900805 6.34204e-08 1.37772 6.34204e-08 1.875V18.375C-6.73674e-05 18.5758 0.0536374 18.7731 0.155537 18.9461C0.257437 19.1192 0.403815 19.2619 0.579471 19.3593C0.755127 19.4567 0.953654 19.5052 1.15444 19.5C1.35522 19.4947 1.55093 19.4358 1.72125 19.3294L7.12406 15.9544L12.5287 19.3294C12.6991 19.4358 12.8948 19.4947 13.0956 19.5C13.2963 19.5052 13.4949 19.4567 13.6705 19.3593C13.8462 19.2619 13.9926 19.1192 14.0945 18.9461C14.1964 18.7731 14.2501 18.5758 14.25 18.375V1.875C14.25 1.37772 14.0525 0.900805 13.7008 0.549175C13.3492 0.197544 12.8723 0 12.375 0ZM12 16.3453L7.72031 13.6706C7.54151 13.5589 7.33491 13.4996 7.12406 13.4996C6.91321 13.4996 6.70661 13.5589 6.52781 13.6706L2.25 16.3453V2.25H12V16.3453Z"
                        fill="white"
                      />
                    </svg>
                    Salvar
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.confirmDelete}>
                <p className={styles.confirmText}>
                  Tem certeza que deseja deletar este material?
                </p>
                <div className={styles.confirmActions}>
                  <button
                    type="button"
                    onClick={handleCancelDelete}
                    className={styles.cancelButton}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className={styles.confirmDeleteButton}
                  >
                    Sim, deletar
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default EditMaterial;