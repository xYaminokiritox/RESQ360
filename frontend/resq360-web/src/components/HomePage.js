import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

function HomePage() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to ResQ360</Typography>
      <Typography variant="body1" gutterBottom>This is the home page of the ResQ360 web application.</Typography>
      <Card>
        <CardContent>
          <Typography variant="h5">Interactive Element</Typography>
          <Typography variant="body2">This is an interactive card with some text.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default HomePage;