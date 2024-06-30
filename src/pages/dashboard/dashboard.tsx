import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskArea } from '../../components/taskArea/taskArea';
import { Sidebar } from '../../components/sidebar/sidebar';

export const DashBoard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};
