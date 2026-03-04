import { ComponentType } from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type NavigationRoute<Stack> = {
  name: keyof Stack;
  component: ComponentType;
  options?: NativeStackNavigationOptions;
};
