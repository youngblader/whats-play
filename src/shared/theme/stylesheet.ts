import { StyleSheet } from 'react-native-unistyles';

import { Colors } from './colors';

export type AppTheme = keyof typeof appThemes;
export type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

const appThemes = {
  light: {},
  dark: {
    background: Colors.background,
  },
};

StyleSheet.configure({
  themes: appThemes,
  settings: {
    initialTheme: 'dark',
  },
});
