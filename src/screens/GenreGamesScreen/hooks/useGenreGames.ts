import { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

import { FlashListRef } from '@shopify/flash-list';
import { useQuery } from '@tanstack/react-query';

import { Game, GamesApi } from '@entities/games';
import { useAppNavigation, useAppParams } from '@shared/lib';

const QUERYKEY = 'genreGames';

export const useGenreGames = () => {
  const navigation = useAppNavigation();
  const { params } = useAppParams('GenreGames');

  const listRef = useAnimatedRef<FlashListRef<Game>>();
  const scrollY = useSharedValue(0);

  const genreId = params?.genre?.id;

  const { data, isLoading: isLoading } = useQuery({
    queryKey: [QUERYKEY, genreId],
    queryFn: () => GamesApi.getGenreGames(genreId),
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const y = event.contentOffset.y;
      scrollY.value = y > 150 ? 1 : 0;
    },
  });

  const scrollToTop = () => {
    listRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const presentGame = (game: Game) => {
    navigation.navigate('Game', { id: game?.id, title: game?.name });
  };

  return {
    games: data?.results,
    title: params?.genre?.name,
    listRef,
    scrollY,
    presentGame,
    scrollHandler,
    scrollToTop,
    isLoading,
  };
};
