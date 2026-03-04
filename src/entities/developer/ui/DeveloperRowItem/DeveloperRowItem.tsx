import { FC } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native-unistyles';

import { Genre } from '@entities/genres';
import { AnimatedPressable, AppText } from '@shared/ui';

interface DeveloperRowItemProps extends Genre {
  onPress: () => void;
}

export const DeveloperRowItem: FC<DeveloperRowItemProps> = ({ name, image_background, onPress }) => {
  return (
    <AnimatedPressable style={styles.container} onPress={onPress}>
      <FastImage style={styles.img} source={{ uri: image_background }}>
        <LinearGradient
          style={styles.gradient}
          start={{ x: 2, y: 1.5 }}
          end={{ x: 2.1, y: 0.4 }}
          colors={['rgba(17, 24, 39, 0.78)', 'rgba(17, 24, 39, 0.2)']}>
          <View style={styles.wrapper}>
            <AppText>{name}</AppText>
          </View>
        </LinearGradient>
      </FastImage>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: 8,
  },
  wrapper: {
    padding: 12,
  },
  gradient: {
    height: 100,
    justifyContent: 'flex-end',
  },
  img: {
    justifyContent: 'flex-end',
    height: 100,
    borderRadius: 8,
  },
});
