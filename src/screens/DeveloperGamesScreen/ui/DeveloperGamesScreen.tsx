import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { Game, GameItem } from '@entities/games';
import { AppLayout } from '@shared/layout';
import { utilsStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useDevelopersGames } from '../hooks/useDeveloperGames';

export const DeveloperGamesScreen: FC = () => {
  const { games, title, isLoading, onEndReached, presentGame } = useDevelopersGames();

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => <GameItem {...item} onPress={() => presentGame(item)} />;

  return (
    <AppLayout withNavigate title={title}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={games}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          contentContainerStyle={utilsStyles.list}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      )}
    </AppLayout>
  );
};

const ItemSeparatorComponent: FC = () => <View style={utilsStyles.separator} />;
