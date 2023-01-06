import React from 'react';
import {Avatar,Button,TextField,Grid,Box,Typography} from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Layout from '../components/layout';


const contact = ()=> {

  return(
        <Layout>
            <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:8,
          }}
        >
          <Avatar sx={{ m: 1}} >
            <ConnectWithoutContactIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }} name="contact" data-netlify="true" >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mailAdress"
                  label="Email Address"
                  name="mailAdress"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="subject"
                  name="subject"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  minRows={4}
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  size="medium"
                  multiline
                  maxRows={7}
                />
              </Grid>
            </Grid>
            <input type="hidden" name="form-name" value="contact" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send message
            </Button>
          </Box>
        </Box>
        </Layout>
    )
         
}

export default contact;