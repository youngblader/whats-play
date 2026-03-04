import { FC, memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import { IconProps } from '../iconTypes';

const boxWidth = 7;
const boxHeight = 12;
const ratio = boxHeight / boxWidth;

export const ChevroneRightIcon: FC<IconProps> = memo(function ChevroneRightIcon({ size = boxWidth, style }) {
  return (
    <Svg style={style} width={size} height={size * ratio} viewBox="0 0 7 12" fill="none">
      <Path
        d="M0.749999 0.75L5.75 5.75L0.75 10.75"
        stroke="#7B8395"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});
