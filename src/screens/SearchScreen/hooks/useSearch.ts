import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Game, GamesApi } from '@entities/games';
import { useDebounce } from '@shared/hooks/useDebounce';
import { useAppNavigation } from '@shared/lib';

export const useSearch = () => {
  const navigation = useAppNavigation();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const debounceQuery = useDebounce(searchQuery);

  const { data: games, isFetching } = useQuery({
    queryKey: ['search', debounceQuery],
    queryFn: () => GamesApi.getGamesByQuery(debounceQuery),
    enabled: debounceQuery?.length > 0,
  });

  const presentGame = (game: Game) => {
    navigation.navigate('Game', { id: game?.id, title: game?.name });
  };

  return { games, searchQuery, isFetching, setSearchQuery, presentGame };
};
