import { FC, memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@shared/theme';

import { IconProps } from '../iconTypes';

const boxWidth = 19;
const boxHeight = 17;
const ratio = boxHeight / boxWidth;

export const HeartIcon: FC<IconProps> = memo(function HeartIcon({ color = Colors.white, size = boxWidth, style }) {
  return (
    <Svg style={style} width={size} height={size * ratio} viewBox="0 0 20 18" fill="none">
      <Path
        d="M1.73389 8.36012L6.86798 15.2602C8.34549 17.246 11.1545 17.246 12.632 15.2602L17.7661 8.36013C19.078 6.59701 19.078 4.09173 17.7661 2.32861C15.8457 -0.252349 11.4071 0.514197 9.75 3.2981C8.09289 0.514196 3.65428 -0.252348 1.7339 2.32861C0.422036 4.09173 0.422033 6.59701 1.73389 8.36012Z"
        stroke="#7B8395"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
