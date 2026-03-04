import { FC } from 'react';
import { Pressable, View } from 'react-native';
import Animated, { FadeInDown, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';

import { Game, GameItem } from '@entities/games';
import { ArrowLeftIcon } from '@shared/icons';
import { Colors, globalStyles, utilsStyles } from '@shared/theme';
import { LoadingIndicator } from '@shared/ui';

import { useGenreGames } from '../hooks/useGenreGames';

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList<Game>);

export const GenreGamesScreen: FC = () => {
  const { games, listRef, scrollToTop, scrollHandler, presentGame, scrollY, isLoading } = useGenreGames();

  const renderItem = ({ item }: ListRenderItemInfo<Game>) => <GameItem {...item} onPress={() => presentGame(item)} />;

  const animatedButton = useAnimatedStyle(() => {
    return {
      opacity: withTiming(scrollY.value, { duration: 200 }),
    };
  });

  return (
    <View style={globalStyles.flex}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Animated.View style={globalStyles.flex} entering={FadeInDown.duration(450).damping(20)}>
          <AnimatedFlashList
            ref={listRef}
            data={games}
            renderItem={renderItem}
            onScroll={scrollHandler}
            contentContainerStyle={styles.list}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </Animated.View>
      )}

      <Animated.View style={animatedButton}>
        <Pressable onPress={scrollToTop}>
          <View style={styles.button}>
            <ArrowLeftIcon color={Colors.white} />
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const ItemSeparatorComponent: FC = () => <View style={utilsStyles.separator} />;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#393F4B',
    borderRadius: 32,
    transform: [{ rotate: '90deg' }],
    backgroundColor: Colors.background,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    marginTop: 10,
  },
});
