import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function ContactPage() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Contact Us</Typography>
      <Typography variant="body1" gutterBottom>This is the contact page of the ResQ360 web application.</Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </form>
    </Container>
  );
}

export default ContactPage;