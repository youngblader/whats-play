import { FC } from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppTabsRoutes, BottomTabsParamsList } from '@shared/config';
import { HeartTabIcon, MainIcon, SearchIcon } from '@shared/icons';
import { Colors } from '@shared/theme';

import { MainStack } from './MainStack';
import { SearchStack } from './SearchStack';
import { WishlistStack } from './WishlistStack';

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.gray,
  tabBarStyle: {
    borderTopWidth: 1,
    borderTopColor: '#393F4B',
    backgroundColor: '#24282F',
  },
};

export const TabStack: FC = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName={AppTabsRoutes.MainTab} backBehavior={'history'}>
      <Tab.Screen
        name={AppTabsRoutes.MainTab}
        component={MainStack}
        options={{
          title: 'Games',
          tabBarIcon: ({ focused }) => <MainIcon size={18} color={focused ? Colors.primary : Colors.white} />,
        }}
      />

      <Tab.Screen
        name={AppTabsRoutes.SearchTab}
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <SearchIcon size={18} color={focused ? Colors.primary : Colors.white} />,
        }}
      />

      <Tab.Screen
        name={AppTabsRoutes.WishlistTab}
        component={WishlistStack}
        options={() => ({
          title: 'Wishlist',
          tabBarIcon: ({ focused }) => <HeartTabIcon size={18} color={focused ? Colors.primary : Colors.white} />,
        })}
      />
    </Tab.Navigator>
  );
};
