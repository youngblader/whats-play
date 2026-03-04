import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { ChevroneRightIcon } from '@shared/icons';
import { hitSlop } from '@shared/theme';

import { AppText } from './AppText';

type SectionDividerProps = {
  title: string;
  onPress?: () => void;
};

export const SectionDivider: FC<SectionDividerProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <AppText size={20} weight={'500'}>
        {title}
      </AppText>

      {onPress && (
        <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.8} onPress={onPress}>
          <ChevroneRightIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
    paddingBottom: 20,
    gap: 10,
  },
});
