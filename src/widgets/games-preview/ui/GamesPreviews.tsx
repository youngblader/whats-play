import { FC } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import { Game, GamePreview } from '@entities/games';
import { useAppNavigation } from '@shared/lib';
import { Colors, globalStyles } from '@shared/theme';
import { AppText } from '@shared/ui';

type Props = {
  data?: Game[];
};

export const GamesPreviews: FC<Props> = ({ data }) => {
  const navigation = useAppNavigation();

  const presentGame = (game: Game) => {
    navigation.push('Game', { title: game?.name, id: game?.id });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => (
    <GamePreview {...item} onPress={() => presentGame(item)} />
  );

  return (
    <View style={globalStyles.mt20}>
      <AppText style={styles.title} size={25} weight={'500'} color={Colors.white}>
        Find you perfect game
      </AppText>

      <FlashList
        horizontal
        data={data}
        renderItem={renderItem}
        contentContainerStyle={globalStyles.ph16}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

const ItemSeparatorComponent: FC = () => <View style={globalStyles.mr10} />;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
});
