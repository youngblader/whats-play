import { useInfiniteQuery } from '@tanstack/react-query';

import { Game, GamesApi } from '@entities/games';
import { useAppNavigation, useAppParams } from '@shared/lib';

const QUERYKEY = 'developer-infinity';

export const useDevelopersGames = () => {
  const navigation = useAppNavigation();
  const { params } = useAppParams('DeveloperGames');

  const developer = params?.developer;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: [QUERYKEY, developer],
    queryFn: ({ pageParam = 1 }) => GamesApi.getGamesDevelopers(pageParam, 10, params?.developer),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined;
      return pages.length + 1;
    },
  });

  const games = data?.pages.flatMap((p) => p.results) ?? [];

  const onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const presentGame = (game: Game) => {
    navigation.navigate('Game', { id: game?.id, title: game?.name });
  };

  return {
    title: params?.developer,
    games,
    isLoading,
    isFetchingNextPage,
    onEndReached,
    presentGame,
  };
};
