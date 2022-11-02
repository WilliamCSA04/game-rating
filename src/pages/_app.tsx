import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps, AppType } from 'next/app';
import { useState } from 'react';
import { trpc } from '../utils/trpc';

function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient())
  return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    )
};
export default trpc.withTRPC(App);