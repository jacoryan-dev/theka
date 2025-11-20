import api from "./api";
import type {
  Livro,
  CreateLivroData,
  UpdateLivroData,
  LivrosFilters,
  PaginatedResponse,
  Genero,
  Editora,
} from "../types";

export const livrosService = {
  // Listar livros com filtros
  async getLivros(filters?: LivrosFilters): Promise<PaginatedResponse<Livro>> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }

    const response = await api.get<PaginatedResponse<Livro>>(
      `/livros/?${params.toString()}`
    );
    return response.data;
  },

  // Obter livro por ID
  async getLivro(id: number): Promise<Livro> {
    const response = await api.get<Livro>(`/livros/${id}/`);
    return response.data;
  },

  // Criar novo livro
  async createLivro(data: CreateLivroData): Promise<Livro> {
    const formData = new FormData();

    // Adicionar campos obrigatórios
    formData.append("titulo", data.titulo);
    formData.append("autor", data.autor);
    formData.append("isbn", data.isbn);
    formData.append("ano_publicacao", data.ano_publicacao.toString());
    formData.append("genero", data.genero);
    formData.append("editora", data.editora);

    // Adicionar campos opcionais apenas se tiverem valor
    if (data.resumo) {
      formData.append("resumo", data.resumo);
    }

    if (data.numero_paginas) {
      formData.append("numero_paginas", data.numero_paginas.toString());
    }

    if (data.capa instanceof File) {
      formData.append("capa", data.capa);
    }

    const response = await api.post<Livro>("/livros/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  // Atualizar livro
  async updateLivro(id: number, data: UpdateLivroData): Promise<Livro> {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value.toString());
        }
      }
    });

    const response = await api.patch<Livro>(`/livros/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  // Deletar livro
  async deleteLivro(id: number): Promise<void> {
    await api.delete(`/livros/${id}/`);
  },

  // Novidades da semana
  async getNovidades(): Promise<Livro[]> {
    const response = await api.get<Livro[]>("/livros/novidades/");
    return response.data;
  },

  // Listar gêneros
  async getGeneros(): Promise<Genero[]> {
    const response = await api.get<Genero[]>("/generos/");
    return response.data;
  },

  // Criar gênero
  async createGenero(nome: string): Promise<Genero> {
    const response = await api.post<Genero>("/generos/", { nome });
    return response.data;
  },

  // Listar editoras
  async getEditoras(): Promise<Editora[]> {
    const response = await api.get<Editora[]>("/editoras/");
    return response.data;
  },

  // Criar editora
  async createEditora(nome: string): Promise<Editora> {
    const response = await api.post<Editora>("/editoras/", { nome });
    return response.data;
  },
};
