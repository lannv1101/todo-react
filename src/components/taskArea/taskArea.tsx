import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import { TaskCounter } from '../taskCounter/taskCounter';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={10}
          xs={8}
        >
          <Box>Task Will Come Over Here</Box>
          <Box>Task Will Come Over Here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
