import { FC } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Colors } from '@shared/theme';
import { AppText } from '@shared/ui';

type StoreTagProps = {
  name: string;
};

export const StoreTag: FC<StoreTagProps> = ({ name }) => {
  return (
    <View style={styles.tag}>
      <AppText>{name}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: Colors.darkGray,
    borderWidth: 1,
  },
});
