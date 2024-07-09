import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React, { FC, ReactElement } from 'react';

import { Dashboard } from './pages/dashboard/dashboard';
import { ReactQueryDevtools } from 'react-query/devtools';
import { customTheme } from './theme/customTheme';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
