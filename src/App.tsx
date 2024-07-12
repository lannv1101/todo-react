import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React, { FC, ReactElement } from 'react';

import { Dashboard } from './pages/dashboard/dashboard';
import { ReactQueryDevtools } from 'react-query/devtools';
import { customTheme } from './theme/customTheme';
import ComposeContext from './context/Compose.context';
import { RootContext } from './context/root.context';

// Create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={RootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
