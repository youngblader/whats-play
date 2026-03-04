import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { Colors } from '@shared/theme';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTintColor: Colors.white,
  navigationBarColor: Colors.background,
  contentStyle: { backgroundColor: Colors.background },
  headerStyle: { backgroundColor: Colors.background },
};
