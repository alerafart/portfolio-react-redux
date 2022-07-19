import React from "react";
//import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from "../../actions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
// styles
import "./contact.scss"
//import serviceKeys from "./serviceKeys.js";


function Contact() {

  /* const firstName = useSelector((state)=> state.contactForm.firstName);
  const lastName = useSelector((state)=> state.contactForm.lastName);
  const phone = useSelector((state)=> state.contactForm.phone);
  const email = useSelector((state)=> state.contactForm.email);
  const subject = useSelector((state)=> state.contactForm.subject);
  const message = useSelector((state)=> state.contactForm.message); */

  /* const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }; */

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

      const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = contactForm.firstName;
        const lastName = contactForm.lastName;
        // const email = isValidEmail(contactForm.email) ;
        const email = contactForm.email;
        const message = contactForm.message;
        // if (contactForm.firstName && contactForm.lastName && isValidEmail && contactForm.message) {
        if (contactForm.firstName && contactForm.lastName && contactForm.email && contactForm.message) {
            
          
            const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
            const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
            const userId = `${process.env.REACT_APP_USER_ID}`;
            console.log(userId);
            //const userId = 'AvolL9IJiOvdChCMC';
            /* const serviceId = 'service_4sfkqi4';
            const templateId = 'template_d6supa6';
            const userId = 'AvolL9IJiOvdChCMC'; */
            /* SERVICE_ID = 'service_4sfkqi4';
            TEMPLATE_ID = 'template_d6supa6';
            USER_ID = 'AvolL9IJiOvdChCMC'; */

            const templateParams = {
                firstName,
                lastName,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            /* setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true); */
        } else {
            alert('Please fill in all fields.');
        }
    }
    
  /* const handleSubmit= (e) => {
    e.preventDefault;
    console.log("submit fired");
  } */

  /* const [value, setValue] = React.useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  }; */
  return (
    <div id="contact" >

      <Box className="contact"
        component="form"
        //action="mailto:maalejandrarafart@gmail.com"
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
          <span className={contactForm.emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
  
      </Box>
    </div>
  );


}
export default Contact;
