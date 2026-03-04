import { axiosInstance } from '@shared/config';

import { GenresResponse } from '../types/types';
import { GenreRoutes } from './genresRoutes';

export const GenresApi = {
  async getGenres(page: number = 1, limit: number = 5): Promise<GenresResponse> {
    return await axiosInstance
      .get(GenreRoutes.GENRES, { params: { page, page_size: limit } })
      .then((response) => response.data);
  },
};
