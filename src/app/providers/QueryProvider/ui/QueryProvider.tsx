import { FC, PropsWithChildren } from 'react';

import { useTanStackQueryDevTools } from '@rozenite/tanstack-query-plugin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5min
    },
    mutations: {},
  },
});

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  useTanStackQueryDevTools(queryClient);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
