import { FC } from 'react';
import { StatusBar } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '@shared/theme/stylesheet';

import { useMMKVDevTools } from '@rozenite/mmkv-plugin';
import { useNetworkActivityDevTools } from '@rozenite/network-activity-plugin';

import { appStorage } from '@shared/config';

import { InitializedProvider, NavigationProvider, QueryProvider } from '../providers';

export const App: FC = () => {
  useNetworkActivityDevTools();
  useMMKVDevTools({ storages: [appStorage] });

  return (
    <QueryProvider>
      <InitializedProvider>
        <KeyboardProvider>
          <SafeAreaProvider>
            <StatusBar translucent backgroundColor={'transparent'} />
            <NavigationProvider />
          </SafeAreaProvider>
        </KeyboardProvider>
      </InitializedProvider>
    </QueryProvider>
  );
};
