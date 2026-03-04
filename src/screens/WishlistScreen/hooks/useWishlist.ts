import { Game } from '@entities/games';
import { useWishlistStore } from '@entities/wishlist';
import { useAppNavigation } from '@shared/lib';

export const useWishlist = () => {
  const navigation = useAppNavigation();
  const { wishlist } = useWishlistStore();

  const presentGame = (game: Game) => {
    navigation.navigate('Game', { id: game?.id, title: game?.name });
  };

  return { games: wishlist, presentGame };
};
