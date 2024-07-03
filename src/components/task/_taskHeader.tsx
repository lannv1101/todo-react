import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import { ITaskHeader } from './interface/ITaskHeader';
import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  const { title = 'Default title', date = new Date() } =
    props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
