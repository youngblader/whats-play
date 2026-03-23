import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { InitialStackParamsList } from '@shared/config';
import { AppRoutes } from '@shared/config/navigation/routes';

import { InitialNavigationRoutes } from '../../model/config/config';
import { screenOptions } from '../../model/config/options';

const Stack = createNativeStackNavigator<InitialStackParamsList>();

export const InitialStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={AppRoutes.Welcome}>
      {InitialNavigationRoutes.map(({ name, component }) => {
        return <Stack.Screen name={name} component={component} key={name} />;
      })}
    </Stack.Navigator>
  );
};
