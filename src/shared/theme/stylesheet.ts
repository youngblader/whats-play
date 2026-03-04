import { StyleSheet } from 'react-native-unistyles';

import { Colors } from './colors';

const appThemes = {
  light: {},
  dark: {
    background: Colors.background,
  },
};

export type AppTheme = keyof typeof appThemes;
export type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: appThemes,
  settings: {
    initialTheme: 'dark',
  },
});
