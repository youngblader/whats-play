import { FC } from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { Colors } from '@shared/theme';

import { AnimatedPressable } from './AnimatedPressable';

type AppButtonProps = {
  mode?: 'contained' | 'outlined' | 'text';
  style?: 'primary' | 'secondary';
  text: string;
  size?: 'S' | 'M' | 'L';
  isDisabled?: boolean;
  onPress?: () => void;
};

export const AppButton: FC<AppButtonProps> = ({
  text,
  isDisabled = false,
  size = 'M',
  style = 'primary',
  mode = 'contained',
  onPress = () => {},
}) => {
  styles.useVariants({ style, mode, size });

  return (
    <AnimatedPressable disabled={isDisabled} onPress={onPress}>
      <Animated.View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create((_) => {
  return {
    button: {
      compoundVariants: [
        {
          style: 'primary',
          styles: {
            backgroundColor: Colors.primary,
          },
        },
        {
          style: 'secondary',
          styles: {
            backgroundColor: Colors.background,
          },
        },
      ],
      variants: {
        size: {
          S: {
            paddingHorizontal: 10,
            paddingVertical: 25,
            borderRadius: 4,
          },
          M: {
            paddingHorizontal: 10,
            paddingVertical: 12,
            borderRadius: 16,
          },
          L: {
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 8,
          },
        },
        mode: {
          contained: {
            borderColor: 'transparent',
          },
          outlined: {
            backgroundColor: 'transparent',
          },
          text: {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    text: {
      variants: {
        size: {
          S: {
            fontSize: 14,
            lineHeight: 20,
            fontWeight: '500',
            textAlign: 'center',
          },
          M: {
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '500',
            textAlign: 'center',
          },
          L: {
            fontSize: 22,
            lineHeight: 28,
            fontWeight: '400',
            textAlign: 'center',
          },
        },
        style: {
          primary: {
            color: Colors.white,
          },
          secondary: {
            color: Colors.white,
          },
        },
      },
    },
  };
});
