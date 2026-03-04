import { useQueries } from '@tanstack/react-query';

import { DeveloperApi } from '@entities/developer';
import { Game, GamesApi } from '@entities/games';
import { GenresApi } from '@entities/genres';
import { useAppNavigation } from '@shared/lib';

const mainQueryKeys = {
  genres: ['genres'],
  developers: ['developers'],
  gamesPerfect: ['games', 'perfect'],
  gamesComing: ['games', 'coming'],
  gamesReleased: ['games', 'released'],
  gamesPopular: ['games', 'popular'],
} as const;

export const useMain = () => {
  const navigation = useAppNavigation();

  const results = useQueries({
    queries: [
      { queryKey: mainQueryKeys.genres, queryFn: () => GenresApi.getGenres() },
      { queryKey: mainQueryKeys.developers, queryFn: () => DeveloperApi.getDevelopers() },
      { queryKey: mainQueryKeys.gamesPerfect, queryFn: () => GamesApi.getPerfectGames(1, 5) },
      { queryKey: mainQueryKeys.gamesComing, queryFn: () => GamesApi.getCoomingGames(1, 3) },
      { queryKey: mainQueryKeys.gamesReleased, queryFn: () => GamesApi.getReleasedGames(1, 3) },
      { queryKey: mainQueryKeys.gamesPopular, queryFn: () => GamesApi.getPopularGames(1, 3) },
    ],
  });

  const isLoading = results.some((q) => q.isLoading);

  const [genresQuery, developersQuery, perfectQuery, comingQuery, releasedQuery, popularQuery] = results;

  const data = [
    { title: 'Popular Games', data: popularQuery?.data?.results || [] },
    { title: 'Released Games', data: releasedQuery?.data?.results || [] },
    { title: 'Cooming Games', data: comingQuery?.data?.results || [] },
  ];

  const presentGame = (game: Game) => {
    navigation.navigate('Game', { id: game?.id, title: game?.name });
  };

  return {
    data,
    developers: developersQuery?.data?.results || [],
    genres: genresQuery?.data?.results || [],
    perfectGames: perfectQuery?.data?.results || [],
    isLoading,
    presentGame,
  };
};
