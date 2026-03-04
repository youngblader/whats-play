import { FC, memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@shared/theme';

import { IconProps } from '../iconTypes';

const boxWidth = 14;
const boxHeight = 14;
const ratio = boxHeight / boxWidth;

export const ArrowLeftIcon: FC<IconProps> = memo(function ArrowLeftIcon({
  color = Colors.black,
  size = boxWidth,
  style,
}) {
  return (
    <Svg style={style} width={size} height={size * ratio} viewBox="0 0 14 14" fill="none">
      <Path d="M13 7H1M1 7L7 1M1 7L7 13" stroke={color} strokeWidth={1.2} strokeLinecap="square" />
    </Svg>
  );
});
