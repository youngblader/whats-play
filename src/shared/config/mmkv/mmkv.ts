import { MMKV } from 'react-native-mmkv';

import { StateStorage } from 'zustand/middleware';

export const appStorage = new MMKV();

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return appStorage.set(name, value);
  },
  getItem: (name) => {
    const value = appStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return appStorage.delete(name);
  },
};
