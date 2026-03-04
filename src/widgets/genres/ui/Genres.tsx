import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import { Genre, GenrePreviewItem } from '@entities/genres';
import { useAppNavigation } from '@shared/lib';
import { globalStyles } from '@shared/theme';
import { SectionDivider } from '@shared/ui';

type Props = {
  genres: Genre[];
};

export const Genres: FC<Props> = ({ genres }) => {
  const navigation = useAppNavigation();

  const presentDevelopers = () => {
    navigation.navigate('Genres');
  };

  const presentGenreGames = (genre: Genre) => {
    navigation.navigate('GenreGames', { genre });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Genre>) => (
    <GenrePreviewItem {...item} onPress={() => presentGenreGames(item)} />
  );

  return (
    <View>
      <SectionDivider title={'Developers'} onPress={presentDevelopers} />
      <FlatList
        horizontal
        data={genres}
        renderItem={renderItem}
        contentContainerStyle={globalStyles.ph16}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

const ItemSeparatorComponent: FC = () => <View style={globalStyles.ml10} />;
