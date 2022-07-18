import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// styles
import "./contact.scss"

function Contact() {
  return (
    <div id="contact" className="contact">

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <div className="contact__fields">            
            <TextField
              required
              id="filled-required"
              label="Prénom"
              placeholder="Prénom"
              autoComplete="off"
              variant="filled"
            />
            <TextField
              //disabled
              //id="filled-disabled"
              required
              id="filled-required"
              label="Nom"
              placeholder="Nom"
              variant="filled"
            />
            <TextField
              required
              id="filled-required"
              label="Email"
              placeholder="Email"
              type= "email"
              variant="filled"
            />
            <TextField
              id="filled-number"
              label="Téléphone"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />             
          </div>

          <div className="contact__message">
            <TextField
              id="filled-helperText"
              label=""
              placeholder="Objet"
              // defaultValue="Default Value"
              helperText="Objet de votre demande"
              variant="filled"
            />
          </div>
          <div className="contact__message">  
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              //defaultValue="Default Value"
            />
          </div>          
      </Box>
    </div>
  );
}

export default Contact;
