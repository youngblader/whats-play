import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { GamesApi } from '@entities/games';
import { useAppParams } from '@shared/lib';

export const useGame = () => {
  const { params } = useAppParams('Game');
  const gameId = params?.id;

  const { data, isLoading: isGameLoading } = useQuery({
    queryKey: ['game', gameId],
    queryFn: () => GamesApi.getGameById(gameId),
  });

  const { data: games, isLoading: isCoomingLoading } = useQuery({
    queryKey: ['similarGames'],
    queryFn: () => GamesApi.getCoomingGames(1, 3),
  });

  const isGoodMetascore = useMemo(() => data?.metacritic != null && data.metacritic >= 85, [data?.metacritic]);

  return {
    games: games?.results,
    title: params?.title,
    isGoodMetascore: isGoodMetascore,
    data,
    isLoading: isGameLoading || isCoomingLoading,
  };
};
