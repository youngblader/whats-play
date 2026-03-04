import { FC } from 'react';
import { Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native-unistyles';

import { Game } from '@entities/games';
import { Genre } from '@entities/genres';
import { Colors } from '@shared/theme';
import { AppText } from '@shared/ui';

interface GameItemProps extends Game {
  onPress: () => void;
}

export const GameItem: FC<GameItemProps> = ({ name, genres, background_image, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage style={styles.img} source={{ uri: background_image }} resizeMode={FastImage.resizeMode.cover} />

      <View style={styles.content}>
        <AppText weight={'500'} color={Colors.white} numberOfLines={2}>
          {name}
        </AppText>

        <View style={styles.description}>
          {genres?.map((el: Genre) => (
            <AppText key={el.name} size={12} color={Colors.gray}>
              {el.name}
            </AppText>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  description: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    gap: 5,
  },
  content: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
});
