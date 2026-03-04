import { NavigatorScreenParams } from '@react-navigation/native';

import { Genre } from '@entities/genres';

import { AppRoutes, AppTabsRoutes } from './routes';

export type InitialStackParamsList = {
  [AppRoutes.Welcome]: undefined;
};

export type BottomTabsParamsList = {
  [AppTabsRoutes.MainTab]: NavigatorScreenParams<MainStackParamsList>;
  [AppTabsRoutes.SearchTab]: NavigatorScreenParams<SearchStackParamsList>;
  [AppTabsRoutes.WishlistTab]: NavigatorScreenParams<WishlistStackParamsList>;
};

export type MainStackParamsList = {
  [AppRoutes.Main]: undefined;
  [AppRoutes.GenreGames]: { genre: Genre };
  [AppRoutes.Game]: { id: number; title: string };
  [AppRoutes.DeveloperGames]: { developer: string };
  [AppRoutes.Genres]: undefined;
  [AppRoutes.Developers]: undefined;
};

export type SearchStackParamsList = {
  [AppRoutes.Search]: undefined;
  [AppRoutes.Game]: { id: number; title: string };
};

export type WishlistStackParamsList = {
  [AppRoutes.Wishlist]: undefined;
  [AppRoutes.Game]: { id: number; title: string };
};

export type AppNavigationParamsList = MainStackParamsList;
