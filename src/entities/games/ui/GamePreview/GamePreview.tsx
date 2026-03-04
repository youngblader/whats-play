import { FC } from 'react';
import { Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native-unistyles';

import { Game } from '@entities/games';
import { AppText } from '@shared/ui';

interface GamePreviewProps extends Game {
  onPress: () => void;
}

export const GamePreview: FC<GamePreviewProps> = ({ name, background_image, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <FastImage style={styles.image} source={{ uri: background_image }} resizeMode={FastImage.resizeMode.cover} />

      <View style={styles.name}>
        <AppText weight={'500'} numberOfLines={2}>
          {name}
        </AppText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
    borderRadius: 30,
    backgroundColor: '#24282F',
    borderWidth: 1,
    borderColor: '#393F4B',
  },
  name: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
});
