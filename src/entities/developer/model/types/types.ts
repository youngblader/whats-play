export type DevelopersResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Developer[];
};

export type Developer = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: [];
};
