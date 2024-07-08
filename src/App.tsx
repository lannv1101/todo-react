import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { CssBaseline } from '@mui/material';
import { DashBoard } from './pages/dashboard/dashboard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <DashBoard />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
