import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes, SearchStackParamsList } from '@shared/config';

import { SearchNavigationRoutes } from '../../model/config/config';
import { screenOptions } from '../../model/config/options';

const Stack = createNativeStackNavigator<SearchStackParamsList>();

export const SearchStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={AppRoutes.Search}>
      {SearchNavigationRoutes.map(({ name, component }) => {
        return <Stack.Screen name={name} component={component} key={name} />;
      })}
    </Stack.Navigator>
  );
};
