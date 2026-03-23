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
    select: (d) => ({
      pages: [...d.pages.flatMap((p) => p.results)],
      pageParams: [...d.pageParams],
    }),
  });

  const onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const presentGenreGames = (genre: Genre) => {
    navigation.navigate('GenreGames', { genre });
  };

  return { data: data?.pages, isLoading, onEndReached, presentGenreGames };
};
