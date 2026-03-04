import { axiosInstance } from '@shared/config';

import { DevelopersResponse } from '../types/types';
import { DeveloperRoutes } from './developerRoutes';

export const DeveloperApi = {
  async getDevelopers(page: number = 1, limit: number = 5): Promise<DevelopersResponse> {
    return await axiosInstance
      .get<DevelopersResponse>(DeveloperRoutes.DEVELOPERS, { params: { page, page_size: limit } })
      .then((response) => response.data);
  },
};
