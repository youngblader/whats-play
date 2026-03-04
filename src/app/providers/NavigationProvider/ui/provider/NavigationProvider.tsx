import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useReactNavigationDevTools } from '@rozenite/react-navigation-plugin';

import { useAppStore } from '@entities/appState';
import { navigationRef } from '@shared/config';

import { InitialStack, TabStack } from '../stacks';

export const NavigationProvider: FC = () => {
  const { skipWelcome, appInitialize } = useAppStore();

  useReactNavigationDevTools({ ref: navigationRef });

  const isInitStackReady = appInitialize && !skipWelcome;
  const isAppReady = appInitialize && !isInitStackReady;

  return (
    <NavigationContainer ref={navigationRef}>
      {isInitStackReady && <InitialStack />}
      {isAppReady && <TabStack />}
    </NavigationContainer>
  );
};
