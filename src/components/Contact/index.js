import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from "../../actions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
// styles
import "./contact.scss"

function Contact() {

  /* const firstName = useSelector((state)=> state.contactForm.firstName);
  const lastName = useSelector((state)=> state.contactForm.lastName);
  const phone = useSelector((state)=> state.contactForm.phone);
  const email = useSelector((state)=> state.contactForm.email);
  const subject = useSelector((state)=> state.contactForm.subject);
  const message = useSelector((state)=> state.contactForm.message); */

  const contactForm = useSelector((state)=> state.contactForm);
  const dispatch = useDispatch();

  // function to change value of the state formContact
  function handleChange(e) {
    const { value } = e.target;
    const { name } = e.target;
    console.log("handlechange fired")
    console.log({name, value});
    dispatch(sendMessage(value, name));
  }
  const handleSubmit= (e) => {
    //e.preventDefault;
    console.log("submit fired");
  }
  /* const handleFormSubmit = function(()=> {
    console.log("submit fired");
  }) */
  // const [value, setValue] = React.useState('Controlled');

  /* const handleChange = (event) => {
    setValue(event.target.value);
  }; */
  return (
    <div id="contact" >

      <Box className="contact"
        component="form"
        action="mailto:maalejandrarafart@gmail.com"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <div className="contact__fields">            
            <TextField className="contact__fields__field"
              required
              id="filled-required"
              name="firstName"
              value = {contactForm.firstName}
              label="Prénom"
              placeholder="Prénom"
              autoComplete="off"
              variant="filled"
              onChange= {handleChange}
            />

            <TextField className="contact__fields__field"
              //disabled
              //id="filled-disabled"
              required
              id="filled-required"
              name="lastName"
              value = {contactForm.lastName}
              label="Nom"
              placeholder="Nom"
              variant="filled"
              onChange= {handleChange}
            />
            <TextField className="contact__fields__field"
              required
              id="filled-required"
              name="email"
              value = {contactForm.email}
              label="Email"
              placeholder="Email"
              type= "email"
              pattern=".+@globex\.com"
              variant="filled"
              onChange= {handleChange}
            />
            <TextField className="contact__fields__field"
              id="filled-number"
              name="phone"
              value = {contactForm.phone}
              label="Téléphone"
              type="number"
              placeholder="Téléphone"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange= {handleChange}
            />             
          </div>

          <div className="contact__message">
            <TextField
              id="filled-helperText"
              name="subject"
              label=""
              placeholder="Objet"
              value = {contactForm.subject}
              // defaultValue="Default Value"
              helperText="Objet de votre demande"
              variant="filled"
              onChange= {handleChange}
            />
          </div>
          <div className="contact__message">  
            <TextField
              required
              id="outlined-multiline-static"
              name="message"
              value = {contactForm.message}
              label="Message"
              multiline
              onChange= {handleChange}
              //rows={10}
              //defaultValue="Default Value"
            />
          </div>
          <Button type="submit" variant="contained">Submit</Button>
          
      </Box>
    </div>
  );
}

export default Contact;
