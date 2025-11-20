import api from "./api";
import type {
  SobreNos,
  NossaHistoria,
  MembroEquipe,
  NossoValor,
  Topico,
  EstatisticasBiblioteca,
  Contato,
} from "../types";

export const institucionalService = {
  // Sobre Nós
  async getSobreNos(): Promise<SobreNos> {
    const response = await api.get<SobreNos>("/institucional/sobrenos/");
    return response.data;
  },

  async createSobreNos(data: Partial<SobreNos>): Promise<SobreNos> {
    const response = await api.post<SobreNos>("/institucional/sobrenos/", data);
    return response.data;
  },

  // Nossa História
  async getNossaHistoria(): Promise<NossaHistoria> {
    const response = await api.get<NossaHistoria>(
      "/institucional/nossa-historia/"
    );
    return response.data;
  },

  async createNossaHistoria(
    data: Partial<NossaHistoria>
  ): Promise<NossaHistoria> {
    const response = await api.post<NossaHistoria>(
      "/institucional/nossa-historia/",
      data
    );
    return response.data;
  },

  // Membros da Equipe
  async getMembrosEquipe(): Promise<MembroEquipe[]> {
    const response = await api.get<MembroEquipe[]>(
      "/institucional/membros-equipe/"
    );
    return response.data;
  },

  async createMembroEquipe(data: Partial<MembroEquipe>): Promise<MembroEquipe> {
    const response = await api.post<MembroEquipe>(
      "/institucional/membros-equipe/",
      data
    );
    return response.data;
  },

  async updateMembroEquipe(
    id: number,
    data: Partial<MembroEquipe>
  ): Promise<MembroEquipe> {
    const response = await api.patch<MembroEquipe>(
      `/institucional/membros-equipe/${id}/`,
      data
    );
    return response.data;
  },

  async deleteMembroEquipe(id: number): Promise<void> {
    await api.delete(`/institucional/membros-equipe/${id}/`);
  },

  // Nossos Valores
  async getNossosValores(): Promise<NossoValor[]> {
    const response = await api.get<NossoValor[]>(
      "/institucional/nossos-valores/"
    );
    return response.data;
  },

  async createNossoValor(data: Partial<NossoValor>): Promise<NossoValor> {
    const response = await api.post<NossoValor>(
      "/institucional/nossos-valores/",
      data
    );
    return response.data;
  },

  async updateNossoValor(
    id: number,
    data: Partial<NossoValor>
  ): Promise<NossoValor> {
    const response = await api.patch<NossoValor>(
      `/institucional/nossos-valores/${id}/`,
      data
    );
    return response.data;
  },

  async deleteNossoValor(id: number): Promise<void> {
    await api.delete(`/institucional/nossos-valores/${id}/`);
  },

  // Tópicos
  async getTopicos(): Promise<Topico[]> {
    const response = await api.get<Topico[]>("/institucional/topicos/");
    return response.data;
  },

  async createTopico(data: Partial<Topico>): Promise<Topico> {
    const response = await api.post<Topico>("/institucional/topicos/", data);
    return response.data;
  },

  async updateTopico(id: number, data: Partial<Topico>): Promise<Topico> {
    const response = await api.patch<Topico>(
      `/institucional/topicos/${id}/`,
      data
    );
    return response.data;
  },

  async deleteTopico(id: number): Promise<void> {
    await api.delete(`/institucional/topicos/${id}/`);
  },

  // Estatísticas da Biblioteca
  async getEstatisticas(): Promise<EstatisticasBiblioteca> {
    const response = await api.get<EstatisticasBiblioteca>(
      "/institucional/estatisticas-biblioteca/"
    );
    return response.data;
  },

  // Contato
  async getContatos(): Promise<Contato[]> {
    const response = await api.get<Contato[]>("/institucional/contato/");
    return response.data;
  },

  async createContato(data: Contato): Promise<Contato> {
    const response = await api.post<Contato>("/institucional/contato/", data);
    return response.data;
  },
};
