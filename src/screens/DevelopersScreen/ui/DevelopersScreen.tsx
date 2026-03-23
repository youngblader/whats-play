import { FC } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Developer, DeveloperRowItem } from '@entities/developer';
import { AppLayout } from '@shared/layout';
import { utilsStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useDevelopers } from '../hooks/useDevelopers';

export const DevelopersScreen: FC = () => {
  const { data, isLoading, onEndReached, presentDeveloperGames } = useDevelopers();

  const renderItem = ({ item }: ListRenderItemInfo<Developer>) => (
    <DeveloperRowItem {...item} onPress={() => presentDeveloperGames(item)} />
  );

  return (
    <AppLayout title={'Developers'}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          contentContainerStyle={utilsStyles.list}
          columnWrapperStyle={styles.row}
        />
      )}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
