import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { Game, GameItem } from '@entities/games';
import { globalStyles, utilsStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useDevelopersGames } from '../hooks/useDeveloperGames';

export const DeveloperGamesScreen: FC = () => {
  const { games, isLoading, isFetchingNextPage, onEndReached, presentGame } = useDevelopersGames();

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => <GameItem {...item} onPress={() => presentGame(item)} />;

  const ListFooterComponent = isFetchingNextPage ? (
    <View style={globalStyles.mv20}>
      <LoadingIndicator />
    </View>
  ) : null;

  return (
    <View style={globalStyles.flex}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={games}
          renderItem={renderItem}
          onEndReached={onEndReached}
          contentContainerStyle={utilsStyles.list}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListFooterComponent={ListFooterComponent}
        />
      )}
    </View>
  );
};

const ItemSeparatorComponent: FC = () => <View style={utilsStyles.separator} />;
