import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardComponent = ({ title, url }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {`URL: ${url}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
