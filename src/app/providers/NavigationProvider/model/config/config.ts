import {
  DeveloperGamesScreen,
  DevelopersScreen,
  GameScreen,
  GenreGamesScreen,
  GenresScreen,
  MainScreen,
  SearchScreen,
  WelcomeScreen,
  WishlistScreen,
} from '@screens';
import {
  AppRoutes,
  InitialStackParamsList,
  MainStackParamsList,
  SearchStackParamsList,
  WishlistStackParamsList,
} from '@shared/config';

import { NavigationRoute } from '../types/types';

export const InitialNavigationRoutes: NavigationRoute<InitialStackParamsList>[] = [
  { name: AppRoutes.Welcome, component: WelcomeScreen },
];

export const MainNavigationRoutes: NavigationRoute<MainStackParamsList>[] = [
  { name: AppRoutes.Main, component: MainScreen },
  { name: AppRoutes.GenreGames, component: GenreGamesScreen },
  { name: AppRoutes.Game, component: GameScreen },
  { name: AppRoutes.Genres, component: GenresScreen },
  { name: AppRoutes.DeveloperGames, component: DeveloperGamesScreen },
  { name: AppRoutes.Developers, component: DevelopersScreen },
];

export const SearchNavigationRoutes: NavigationRoute<SearchStackParamsList>[] = [
  { name: AppRoutes.Search, component: SearchScreen },
  { name: AppRoutes.Game, component: GameScreen },
];

export const WishlistNavigationRoutes: NavigationRoute<WishlistStackParamsList>[] = [
  { name: AppRoutes.Wishlist, component: WishlistScreen },
  { name: AppRoutes.Game, component: GameScreen },
];
