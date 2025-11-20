// Tipos da API

// Autenticação
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  first_name?: string;
  last_name?: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  new_password: string;
}

// Biblioteca - Livros
export interface Genero {
  id: number;
  nome: string;
}

export interface Editora {
  id: number;
  nome: string;
}

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  isbn: string;
  ano_publicacao: number;
  descricao?: string;
  capa?: string;
  genero: Genero;
  editora: Editora;
  criado_em: string;
  atualizado_em: string;
}

export interface CreateLivroData {
  titulo: string;
  autor: string;
  isbn: string;
  ano_publicacao: number;
  resumo?: string;
  numero_paginas?: number;
  capa?: File;
  genero: string;
  editora: string;
}

export type UpdateLivroData = Partial<CreateLivroData>;

export interface LivrosFilters {
  genero?: number;
  genero_nome?: string;
  editora?: number;
  editora_nome?: string;
  ano_publicacao?: number;
  search?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Institucional
export interface SobreNos {
  id: number;
  titulo: string;
  descricao: string;
  banner?: string;
}

export interface NossaHistoria {
  id: number;
  titulo: string;
  conteudo: string;
  imagem?: string;
}

export interface MembroEquipe {
  id: number;
  nome: string;
  cargo: string;
  foto?: string;
  bio?: string;
}

export interface NossoValor {
  id: number;
  titulo: string;
  descricao: string;
  icone?: string;
}

export interface Topico {
  id: number;
  titulo: string;
  descricao: string;
  ordem?: number;
}

export interface EstatisticasBiblioteca {
  id: number;
  total_livros: number;
  total_autores: number;
  total_generos: number;
  total_editoras: number;
  atualizado_em: string;
}

export interface Contato {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  criado_em?: string;
}

// Tipos de erro da API
export interface ApiError {
  message: string;
  details?: Record<string, string[]>;
}
