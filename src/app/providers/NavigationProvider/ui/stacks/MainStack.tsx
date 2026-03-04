import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes, MainStackParamsList } from '@shared/config';

import { MainNavigationRoutes } from '../../model/config/config';
import { screenOptions } from '../../model/config/options';

const Stack = createNativeStackNavigator<MainStackParamsList>();

export const MainStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={AppRoutes.Main}>
      {MainNavigationRoutes.map(({ name, component, options }) => {
        return <Stack.Screen name={name} component={component} key={name} options={options} />;
      })}
    </Stack.Navigator>
  );
};
