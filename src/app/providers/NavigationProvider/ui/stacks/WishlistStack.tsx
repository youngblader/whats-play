import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes, WishlistStackParamsList } from '@shared/config';

import { WishlistNavigationRoutes } from '../../model/config/config';
import { screenOptions } from '../../model/config/options';

const Stack = createNativeStackNavigator<WishlistStackParamsList>();

export const WishlistStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={AppRoutes.Wishlist}>
      {WishlistNavigationRoutes.map(({ name, component, options }) => {
        return <Stack.Screen name={name} component={component} key={name} options={options} />;
      })}
    </Stack.Navigator>
  );
};
