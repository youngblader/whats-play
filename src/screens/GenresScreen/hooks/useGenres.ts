import { useInfiniteQuery } from '@tanstack/react-query';

import { Genre, GenresApi } from '@entities/genres';
import { useAppNavigation } from '@shared/lib';

const QUERYKEY = 'genres-infinity';

export const useGenres = () => {
  const navigation = useAppNavigation();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: [QUERYKEY],
    queryFn: ({ pageParam = 1 }) => GenresApi.getGenres(pageParam, 12),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined;
      return pages.length + 1;
    },
  });

  const onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const genres = data?.pages.flatMap((p) => p.results);

  const presentGenreGames = (genre: Genre) => {
    navigation.navigate('GenreGames', { genre });
  };

  return { data: genres, isLoading, isFetchingNextPage, onEndReached, presentGenreGames };
};
