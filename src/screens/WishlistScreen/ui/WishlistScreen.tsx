import { FC } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import { Game, GameItem } from '@entities/games';
import { AppLayout } from '@shared/layout';

import { useWishlist } from '../hooks/useWishlist';

export const WishlistScreen: FC = () => {
  const { games, presentGame } = useWishlist();

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => <GameItem {...item} onPress={() => presentGame(item)} />;

  return (
    <AppLayout title="Wishlist">
      <Animated.View style={styles.container} entering={FadeInDown.duration(450)}>
        <FlashList
          data={games}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </Animated.View>
    </AppLayout>
  );
};

const ItemSeparatorComponent: FC = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingTop: 24,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  separator: {
    marginTop: 10,
  },
});
