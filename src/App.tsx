import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import { router } from './api/routes/index.tsx';
import ErrorBoundary from './shared/hooks/ErrorBoundary.tsx';
import { GlobalStyle } from './styles/global.ts';
import theme from './styles/theme.ts';
import useKakaoLoader from './components/aidrq-create-location/useKakaoLoader.tsx';

const queryClient = new QueryClient();

function App() {
  useKakaoLoader();
  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
