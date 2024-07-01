import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <TaskTitleField />
        <TaskDescriptionField />
      </Stack>
    </Box>
  );
};
