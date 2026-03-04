export type GameResponse = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: [];
  reactions: {};
  added: number;
  added_by_status: {};
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: {};
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: [];
  platforms: GamePlatform[];
  stores: GameStores[];
  publishers: GamePublisher[];
  esrb_ratings: {};
  description_raw: string;
  clip: null;
};

export type GameStores = {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
  };
};

export type GamePlatform = {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
  released_at: string;
  requirements: {
    minimum: string;
    recommended: string;
  };
};

export type GamePublisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type GamesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
};

export type Game = {
  slug: string;
  name: string;
  playtime: number;
  platforms: [];
  stores: [];
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: [];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  metacritic: number;
  suggestions_count: number;
  updated: string;
  id: number;
  score: null;
  clip: null;
  tags: [];
  esrb_rating: [];
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: {
    id: number;
    image: string;
  }[];
  parent_platforms: [];
  genres: [];
};
