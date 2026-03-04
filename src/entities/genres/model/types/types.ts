export type GenresResponse = {
  count: number;
  next: null;
  previous: null;
  results: Genre[];
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: GenreGame[];
};

type GenreGame = {
  id: number;
  slug: string;
  name: string;
  added: number;
};
