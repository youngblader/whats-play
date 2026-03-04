import { FC } from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native-unistyles';

import { Genre } from '@entities/genres';
import { AnimatedPressable, AppText } from '@shared/ui';

interface GenreRowItemProps extends Genre {
  onPress: () => void;
}

export const GenreRowItem: FC<GenreRowItemProps> = ({ name, image_background, onPress }) => {
  return (
    <AnimatedPressable style={styles.container} onPress={onPress}>
      <FastImage style={styles.img} source={{ uri: image_background }}>
        <AppText>{name}</AppText>
      </FastImage>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: 8,
  },
  img: {
    justifyContent: 'flex-end',
    height: 100,
    padding: 12,
    borderRadius: 8,
  },
});
