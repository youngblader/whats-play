import { useEffect } from 'react';

import { useAppStore } from '@entities/appState';

export const useAppInitialize = () => {
  const { appInitialize, setAppInitialize } = useAppStore();

  useEffect(() => {
    if (appInitialize) {
      return;
    }

    setAppInitialize(true);
  }, []);
};
