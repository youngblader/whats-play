import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

import { Game } from '@entities/games';
import { zustandStorage } from '@shared/config';

const storeKey = 'wishlistStore';

interface WishlistStore {
  wishlist: Game[];
  addWishlistGame: (game: Game) => void;
  removeWishlistGame: (gameId: string | number) => void;
  clearWishlist: () => void;
}

type WishlistPersist = Pick<WishlistStore, 'wishlist'>;

const persistOptions: PersistOptions<WishlistStore, WishlistPersist> = {
  name: storeKey,
  storage: createJSONStorage(() => zustandStorage),
  partialize: (state): WishlistPersist => ({
    wishlist: state.wishlist,
  }),
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set) => ({
      wishlist: [],
      addWishlistGame: (game: Game) =>
        set((state) => {
          const existGame = state.wishlist.some((g) => g?.id === game?.id);

          if (existGame) {
            return state;
          }

          return {
            wishlist: [game, ...state.wishlist],
          };
        }),
      removeWishlistGame: (gameId: string | number) =>
        set((state) => ({
          wishlist: state.wishlist.filter((g) => g?.id !== gameId),
        })),
      clearWishlist: () => set({ wishlist: [] }),
    }),
    persistOptions,
  ),
);
