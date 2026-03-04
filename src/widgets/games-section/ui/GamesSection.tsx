import { FC } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Game, GameItem } from '@entities/games';
import { useAppNavigation } from '@shared/lib';
import { globalStyles, utilsStyles } from '@shared/theme';
import { SectionDivider } from '@shared/ui';

type GamesSectionProps = {
  sectionTitle: string;
  data?: Game[];
};

export const GamesSection: FC<GamesSectionProps> = ({ sectionTitle, data }) => {
  const navigation = useAppNavigation();

  const presentGame = (game: Game) => {
    navigation.push('Game', { id: game?.id, title: game?.name });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => <GameItem {...item} onPress={() => presentGame(item)} />;

  return (
    <View style={globalStyles.mt20}>
      <SectionDivider title={sectionTitle} />

      <FlatList
        data={data}
        scrollEnabled={false}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const ItemSeparatorComponent: FC = () => <View style={utilsStyles.separator} />;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
});
