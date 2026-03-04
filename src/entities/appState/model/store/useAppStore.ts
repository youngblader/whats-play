import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

import { zustandStorage } from '@shared/config';

const storeKey = 'appStore';

interface AppStore {
  appInitialize: boolean;
  skipWelcome: boolean;
  setSkipWelcome: (skip: boolean) => void;
  setAppInitialize: (init: boolean) => void;
}

type AppPersist = Pick<AppStore, 'skipWelcome' | 'appInitialize'>;

const persistOptions: PersistOptions<AppStore, AppPersist> = {
  name: storeKey,
  storage: createJSONStorage(() => zustandStorage),
  partialize: (state): AppPersist => ({
    skipWelcome: state.skipWelcome,
    appInitialize: state.appInitialize,
  }),
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      skipWelcome: false,
      appInitialize: false,
      setSkipWelcome: (skip: boolean) => set(() => ({ skipWelcome: skip })),
      setAppInitialize: (initialize: boolean) => set(() => ({ appInitialize: initialize })),
    }),
    persistOptions,
  ),
);
