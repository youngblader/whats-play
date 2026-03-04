import { useMemo } from 'react';

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
  });

  const onEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const developers = useMemo(() => data?.pages.flatMap((p) => p.results), [data]);

  const presentDeveloperGames = (developer: Developer) => {
    navigation.navigate('DeveloperGames', { developer: developer.slug });
  };

  return {
    data: developers,
    isLoading,
    isFetchingNextPage,
    onEndReached,
    presentDeveloperGames,
  };
};
