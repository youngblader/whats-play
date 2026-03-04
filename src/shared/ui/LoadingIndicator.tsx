/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';
import { StyleSheet } from 'react-native-unistyles';

import { Colors } from '@shared/theme';

type Props = {
  size?: string;
  color?: string;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const LoadingIndicator: FC<Props> = ({ size = '25', color = Colors.primary }) => {
  const RADIUS = Number(size) / (2 * Math.PI);
  const STROKE = RADIUS / 6;
  const HALF_CIRCLE = RADIUS + STROKE;
  const DIAMETER = 2 * HALF_CIRCLE;

  const progress = useSharedValue(0);
  const rotate = useSharedValue(0);

  const startLoadingAnimation = () => {
    rotate.value = withRepeat(withTiming(360, { duration: 900, easing: Easing.linear }), -1, false);
    progress.value = withRepeat(
      withSequence(withTiming(0.7, { duration: 800 }), withTiming(0.1, { duration: 2000 })),
      -1,
      true,
    );
  };

  const animatedCircleProps = useAnimatedProps(() => ({ strokeDashoffset: Number(size) * (1 - progress.value) }));
  const animatedViewStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotate.value}deg` }] }));

  useEffect(() => {
    startLoadingAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={animatedViewStyle}>
        <Svg width={size} height={size} viewBox={`0 0 ${DIAMETER} ${DIAMETER}`} fill="none">
          <G origin={`${HALF_CIRCLE}, ${HALF_CIRCLE}`} rotation="-90">
            <AnimatedCircle
              cx="50%"
              cy="50%"
              r={RADIUS}
              stroke={color}
              strokeWidth={STROKE}
              strokeLinecap={'round'}
              strokeDasharray={size}
              animatedProps={animatedCircleProps}
              fill={'transparent'}
            />
          </G>
        </Svg>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
