module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './src/app',
          '@screens': './src/screens',
          '@widgets': './src/widgets',
          '@features': './src/features',
          '@entities': './src/entities',
          '@shared': './src/shared',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
    'rozenite-preview/babel-plugin',
    [
      'react-native-unistyles/plugin',
      {
        root: 'src',
      },
    ],
  ],
};
