import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Genre, GenreRowItem } from '@entities/genres';
import { globalStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useGenres } from '../hooks/useGenres';

export const GenresScreen: FC = () => {
  const { data, isLoading, onEndReached, presentGenreGames } = useGenres();

  const renderItem = ({ item }: ListRenderItemInfo<Genre>) => (
    <GenreRowItem {...item} onPress={() => presentGenreGames(item)} />
  );

  return (
    <View style={globalStyles.flex}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
