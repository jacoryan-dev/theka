import React, { useState } from "react";
import styles from "./AddMaterial.module.css";

interface AddMaterialProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (material: MaterialData) => void;
}

export interface MaterialData {
  title: string;
  author: string;
  pages: string;
  isbn: string;
  year: string;
  publisher: string;
  summary: string;
  coverImage?: File | null;
}

const AddMaterial: React.FC<AddMaterialProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<MaterialData>({
    title: "",
    author: "",
    pages: "",
    isbn: "",
    year: "",
    publisher: "",
    summary: "",
    coverImage: null,
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        coverImage: file,
      }));

      // Criar preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      title: "",
      author: "",
      pages: "",
      isbn: "",
      year: "",
      publisher: "",
      summary: "",
      coverImage: null,
    });
    setPreviewImage(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay para desktop modal */}
      <div className={styles.overlay} onClick={handleClose}></div>

      {/* Container principal */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Adicionar material ao catálogo</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formLayout}>
              {/* Área de upload de imagem */}
              <div className={styles.imageSection}>
                <div className={styles.imageUploadBox}>
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className={styles.previewImage} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <svg width="54" height="46" viewBox="0 0 54 46" fill="none">
                        <path
                          d="M34.4531 12.7969C34.4531 12.0181 34.6841 11.2568 35.1167 10.6093C35.5494 9.9618 36.1643 9.45712 36.8838 9.1591C37.6033 8.86108 38.395 8.7831 39.1588 8.93503C39.9226 9.08696 40.6242 9.46197 41.1749 10.0126C41.7255 10.5633 42.1005 11.2649 42.2525 12.0287C42.4044 12.7925 42.3264 13.5842 42.0284 14.3037C41.7304 15.0232 41.2257 15.6381 40.5782 16.0708C39.9307 16.5034 39.1694 16.7344 38.3906 16.7344C37.3463 16.7344 36.3448 16.3195 35.6064 15.5811C34.868 14.8427 34.4531 13.8412 34.4531 12.7969ZM53.1562 4.92188V30.5156C53.1562 31.821 52.6377 33.0729 51.7147 33.9959C50.7916 34.9189 49.5397 35.4375 48.2344 35.4375H45.2812V40.3594C45.2812 41.6647 44.7627 42.9166 43.8397 43.8397C42.9166 44.7627 41.6647 45.2812 40.3594 45.2812H4.92188C3.61651 45.2812 2.36461 44.7627 1.44158 43.8397C0.518553 42.9166 0 41.6647 0 40.3594V12.7969C0 11.4915 0.518553 10.2396 1.44158 9.31658C2.36461 8.39355 3.61651 7.875 4.92188 7.875H9.84375V4.92188C9.84375 3.61651 10.3623 2.36461 11.2853 1.44158C12.2084 0.518553 13.4603 0 14.7656 0H48.2344C49.5397 0 50.7916 0.518553 51.7147 1.44158C52.6377 2.36461 53.1562 3.61651 53.1562 4.92188ZM39.375 35.4375H14.7656C13.4603 35.4375 12.2084 34.9189 11.2853 33.9959C10.3623 33.0729 9.84375 31.821 9.84375 30.5156V13.7812H5.90625V39.375H39.375V35.4375ZM34.0446 29.5312L25.5938 21.0804L17.1429 29.5312H34.0446ZM47.25 5.90625H15.75V22.5717L22.114 16.2077C23.037 15.285 24.2886 14.7667 25.5938 14.7667C26.8989 14.7667 28.1505 15.285 29.0735 16.2077L42.397 29.5312H47.25V5.90625Z"
                          fill="#F2F2F1"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <label htmlFor="coverUpload" className={styles.uploadButton}>
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
                    <path
                      d="M17.25 9.37589V18.3759C17.25 18.8732 17.0525 19.3501 16.7008 19.7017C16.3492 20.0533 15.8723 20.2509 15.375 20.2509H1.875C1.37772 20.2509 0.900805 20.0533 0.549175 19.7017C0.197544 19.3501 0 18.8732 0 18.3759V9.37589C0 8.87861 0.197544 8.40169 0.549175 8.05006C0.900805 7.69843 1.37772 7.50089 1.875 7.50089H3.75C4.04837 7.50089 4.33452 7.61941 4.5455 7.83039C4.75647 8.04137 4.875 8.32752 4.875 8.62589C4.875 8.92426 4.75647 9.2104 4.5455 9.42138C4.33452 9.63236 4.04837 9.75089 3.75 9.75089H2.25V18.0009H15V9.75089H13.5C13.2016 9.75089 12.9155 9.63236 12.7045 9.42138C12.4935 9.2104 12.375 8.92426 12.375 8.62589C12.375 8.32752 12.4935 8.04137 12.7045 7.83039C12.9155 7.61941 13.2016 7.50089 13.5 7.50089H15.375C15.8723 7.50089 16.3492 7.69843 16.7008 8.05006C17.0525 8.40169 17.25 8.87861 17.25 9.37589ZM5.67094 5.67182L7.5 3.84464V11.6259C7.5 11.9243 7.61853 12.2104 7.8295 12.4214C8.04048 12.6324 8.32663 12.7509 8.625 12.7509C8.92337 12.7509 9.20952 12.6324 9.42049 12.4214C9.63147 12.2104 9.75 11.9243 9.75 11.6259V3.84464L11.5791 5.67464C11.6837 5.77928 11.8079 5.86229 11.9447 5.91893C12.0814 5.97556 12.2279 6.00471 12.3759 6.00471C12.5239 6.00471 12.6705 5.97556 12.8072 5.91893C12.9439 5.86229 13.0682 5.77928 13.1728 5.67464C13.2775 5.56999 13.3605 5.44576 13.4171 5.30903C13.4737 5.1723 13.5029 5.02575 13.5029 4.87776C13.5029 4.72977 13.4737 4.58322 13.4171 4.4465C13.3605 4.30977 13.2775 4.18553 13.1728 4.08089L9.42281 0.330887C9.3183 0.226007 9.1941 0.142791 9.05736 0.0860096C8.92061 0.0292285 8.774 0 8.62594 0C8.47787 0 8.33126 0.0292285 8.19452 0.0860096C8.05777 0.142791 7.93358 0.226007 7.82906 0.330887L4.07906 4.08089C3.97442 4.18553 3.8914 4.30977 3.83477 4.4465C3.77814 4.58322 3.74899 4.72977 3.74899 4.87776C3.74899 5.17665 3.86772 5.46329 4.07906 5.67464C4.29041 5.88598 4.57705 6.00471 4.87594 6.00471C5.17482 6.00471 5.46147 5.88598 5.67281 5.67464L5.67094 5.67182Z"
                      fill="white"
                    />
                  </svg>
                  Adicionar capa
                  <input
                    type="file"
                    id="coverUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className={styles.fileInput}
                  />
                </label>
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
            <div className={styles.actions}>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMaterial;