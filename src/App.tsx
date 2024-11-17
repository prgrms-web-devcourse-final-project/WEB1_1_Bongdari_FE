import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import { router } from './api/routes.tsx';
import ErrorBoundary from './shared/hooks/ErrorBoundary.tsx';
import { GlobalStyle } from './styles/global.ts';
import theme from './styles/theme.ts';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={true} />
            <GlobalStyle />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
