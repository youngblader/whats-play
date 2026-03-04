import { axiosInstance } from '@shared/config';

import { GameResponse, GamesResponse } from '../types/types';
import { GamesRoutes } from './gamesRoutes';

export const GamesApi = {
  async getPerfectGames(page = 1, limit = 5, ordering: string = '-rating'): Promise<GamesResponse> {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, {
        params: { page, page_size: limit, metacritic: '95,100', ordering },
      })
      .then((response) => response.data);
  },
  async getCoomingGames(
    page = 1,
    limit = 5,
    dates: string = '2026-01-21,2026-02-21',
    ordering: string = '-added',
  ): Promise<GamesResponse> {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, {
        params: { page, page_size: limit, dates, ordering },
      })
      .then((response) => response.data);
  },
  async getPopularGames(
    page = 1,
    limit = 5,
    metacritic: string = '65,100',
    ordering: string = '-added',
  ): Promise<GamesResponse> {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, {
        params: { page, page_size: limit, metacritic, ordering },
      })
      .then((response) => response.data);
  },
  async getReleasedGames(
    page = 1,
    limit = 5,
    dates: string = '2025-01-10,2025-02-10',
    ordering: string = '-released',
  ): Promise<GamesResponse> {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, {
        params: { page, page_size: limit, dates, ordering },
      })
      .then((response) => response.data);
  },
  async getGenreGames(genres: string | number, ordering = '-added'): Promise<GamesResponse> {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, { params: { genres, ordering } })
      .then((response) => response.data);
  },
  async getGameById(id: number): Promise<GameResponse> {
    return await axiosInstance.get<GameResponse>(`${GamesRoutes.GAMES}/${id}`).then((response) => response.data);
  },
  async getGamesDevelopers(page = 1, limit = 10, developer: string): Promise<GamesResponse> {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, {
        params: { page, page_size: limit, developers: developer },
      })
      .then((response) => response.data);
  },
  async getGamesByQuery(query: string) {
    return await axiosInstance
      .get<GamesResponse>(GamesRoutes.GAMES, { params: { search: query } })
      .then((response) => response.data);
  },
};
