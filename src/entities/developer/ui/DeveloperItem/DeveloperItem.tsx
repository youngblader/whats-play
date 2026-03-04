import { FC } from 'react';
import { Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native-unistyles';

import { Developer } from '@entities/developer';
import { Colors } from '@shared/theme';
import { AppText } from '@shared/ui';

interface DeveloperItemProps extends Developer {
  onPress?: () => void;
}

export const DeveloperItem: FC<DeveloperItemProps> = ({ image_background, name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <FastImage style={styles.img} source={{ uri: image_background }} resizeMode={FastImage.resizeMode.cover} />

        <AppText align={'center'} style={styles.text} size={15} color={Colors.white} numberOfLines={1}>
          {name}
        </AppText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 98,
    height: 98,
    borderRadius: 50,
  },
  container: {
    alignItems: 'center',
    maxWidth: 100,
  },
  text: {
    paddingTop: 10,
  },
});
