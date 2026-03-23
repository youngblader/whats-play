import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Colors } from '@shared/theme';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: Colors.background },
};
