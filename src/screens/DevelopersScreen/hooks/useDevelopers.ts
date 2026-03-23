import { useInfiniteQuery } from '@tanstack/react-query';

import { Developer, DeveloperApi } from '@entities/developer';
import { useAppNavigation } from '@shared/lib';

const QUERYKEY = 'developers-infinity';

export const useDevelopers = () => {
  const navigation = useAppNavigation();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: [QUERYKEY],
    queryFn: ({ pageParam = 1 }) => DeveloperApi.getDevelopers(pageParam, 12),
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

  const presentDeveloperGames = (developer: Developer) => {
    navigation.navigate('DeveloperGames', { developer: developer.slug });
  };

  return {
    data: data?.pages,
    isLoading,
    onEndReached,
    presentDeveloperGames,
  };
};
