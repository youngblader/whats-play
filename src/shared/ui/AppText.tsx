import { FC } from 'react';
import { Text } from 'react-native';
import { TextProps, TextStyle } from 'react-native';

import { Colors } from '@shared/theme';

interface Props extends TextProps {
  color?: string;
  size?: number;
  lineHeight?: TextStyle['lineHeight'];
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  decorationLine?: TextStyle['textDecorationLine'];
  transform?: TextStyle['textTransform'];
}

export const AppText: FC<Props> = ({
  style,
  color = Colors.white,
  children,
  size = 14,
  align = 'left',
  lineHeight,
  decorationLine = 'none',
  transform = 'none',
  weight = '400',
  ...props
}) => {
  return (
    <Text
      style={[
        style,
        {
          color,
          fontSize: size,
          lineHeight,
          fontWeight: weight,
          textAlign: align,
          textTransform: transform,
          textDecorationLine: decorationLine,
        },
      ]}
      {...props}>
      {children}
    </Text>
  );
};
