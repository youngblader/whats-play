import { FC, PropsWithChildren } from 'react';

import { useAppInitialize } from '../hooks/useAppInitialize';

export const InitializedProvider: FC<PropsWithChildren> = ({ children }) => {
  useAppInitialize();

  return children;
};
