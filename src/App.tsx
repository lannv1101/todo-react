import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import { CssBaseline } from '@mui/material';
import { DashBoard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <DashBoard />
    </ThemeProvider>
  );
};

export default App;
