import { FC, PropsWithChildren } from 'react';
import { Pressable, PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

type Props = PropsWithChildren<
  PressableProps & {
    scaleTo?: number;
    duration?: number;
    onPress: () => void;
  }
>;

export const AnimatedPressable: FC<Props> = ({ children, onPress, scaleTo = 0.95, duration = 180, ...props }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withTiming(scaleTo, { duration }, () => {
      scale.value = withTiming(1, { duration });
      runOnJS(onPress)?.();
    });
  };

  return (
    <Pressable {...props} onPress={handlePress}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </Pressable>
  );
};
