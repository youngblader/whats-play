import { FC } from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

import { Game } from '@entities/games';
import { useWishlistStore } from '@entities/wishlist';
import { FilledHeartIcon, HeartTabIcon } from '@shared/icons';
import { hitSlop } from '@shared/theme';

type AddWishlistProps = {
  game: Game;
};

export const AddWishlist: FC<AddWishlistProps> = ({ game }) => {
  const { wishlist, addWishlistGame, removeWishlistGame } = useWishlistStore();
  const isInWishlist = wishlist.some((g) => g?.id === game?.id);

  const scale = useSharedValue(1);

  const handleAddGameWishlist = () => {
    if (isInWishlist) {
      removeWishlistGame(game?.id);
      return;
    }

    addWishlistGame(game);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = () => {
    scale.value = withSpring(1.2, { damping: 20, stiffness: 600, overshootClamping: true }, () => {
      scale.value = withSpring(1, { damping: 22, stiffness: 500, overshootClamping: true });
    });

    runOnJS(handleAddGameWishlist)();
  };

  return (
    <Pressable hitSlop={hitSlop} onPress={handlePress}>
      <Animated.View style={animatedStyle}>{!isInWishlist ? <HeartTabIcon /> : <FilledHeartIcon />}</Animated.View>
    </Pressable>
  );
};
