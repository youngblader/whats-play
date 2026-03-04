import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Developer, DeveloperRowItem } from '@entities/developer';
import { globalStyles, utilsStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useDevelopers } from '../hooks/useDevelopers';

export const DevelopersScreen: FC = () => {
  const { data, isLoading, isFetchingNextPage, onEndReached, presentDeveloperGames } = useDevelopers();

  const renderItem = ({ item }: ListRenderItemInfo<Developer>) => (
    <DeveloperRowItem {...item} onPress={() => presentDeveloperGames(item)} />
  );

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
          data={data}
          numColumns={2}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          onEndReached={onEndReached}
          contentContainerStyle={utilsStyles.list}
          columnWrapperStyle={styles.row}
          ListFooterComponent={ListFooterComponent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
