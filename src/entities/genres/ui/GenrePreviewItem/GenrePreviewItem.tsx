import { FC } from 'react';
import { Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native-unistyles';

import { Genre } from '@entities/genres';
import { Colors, globalStyles } from '@shared/theme';
import { AppText } from '@shared/ui';

interface GenrePreviewItemProps extends Genre {
  onPress?: () => void;
}

export const GenrePreviewItem: FC<GenrePreviewItemProps> = ({ image_background, name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <FastImage style={styles.img} source={{ uri: image_background }} resizeMode={FastImage.resizeMode.cover} />

        <AppText align={'center'} style={globalStyles.mt10} size={15} color={Colors.white} numberOfLines={1}>
          {name}
        </AppText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    maxWidth: 100,
  },
  img: {
    width: 98,
    height: 98,
    borderRadius: 50,
  },
});
