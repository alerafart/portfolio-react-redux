import React from "react";
import emailjs from '@emailjs/browser';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, confirmMail } from "../../actions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
// styles
import "./contact.scss"


function Contact() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>;
  });
  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const contactForm = useSelector((state)=> state.contactForm);
  const isDarkMode = useSelector((state)=> state.settings.darkMode);
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
    console.log("submit fired");
    const firstname = contactForm.firstName;
    const lastname = contactForm.lastName;
    let email = isValidEmail(contactForm.email); //boolean
    const phone = contactForm.phone;
    const subject = contactForm.subject;
    const message = contactForm.message;
    //validEmail(email);
     // if (contactForm.firstName && contactForm.lastName && contactForm.email && contactForm.message) {
      if (firstname && lastname && email && message) {
      const validEmail = isValidEmail(contactForm.email) ;
      //if valid email proceed to try and send email
      if(validEmail) {
        email = contactForm.email;
        
        console.log(email);
        console.log(validEmail);
        console.log('form ok');
          const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
          const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
          const userId = `${process.env.REACT_APP_USER_ID}`;

          const templateParams = {
              firstname,
              lastname,
              //validEmail,
              email,
              phone,
              subject,
              message
          };
          console.log(templateParams);
          console.log('form correctly filled');
          const emailSucces = emailjs.send(serviceId, templateId, templateParams, userId)
              .then(response => console.log(response))
              .then(error => console.log(error));
              
              if (emailSucces) {
                dispatch(confirmMail());
              }
          }
      } //else if( email.length !== 0 && !email) {
        else if(!email) {
        alert('invalid email.');
        //console.log(isValidEmail);       
      }
      else{
        alert('Please fill in all fields');
      }
      
  }

  return (
    <>
    <div id="contact" >
    <h2 className={isDarkMode ? 'contact' : 'contact light'}>Contact</h2>
      <Box className={isDarkMode ? 'contact' : 'contact light'}
        component="form"
        
        //action="mailto:maalejandrarafart@gmail.com"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, mb: 1 },
        }}
        noValidate
        autoComplete="off"
        >
          <div className="contact__message">
            <TextField className="contact__message__field"
              required
              id="filled-required"
              name="firstName"
              value = {contactForm.firstName || ''}
              label="Prénom"
              placeholder="Prénom"
              autoComplete="off"
              variant="filled"
              onChange= {handleChange}
            />
          </div>
          <div className="contact__message">  
            <TextField className="contact__message__field"
              required
              id="filled-required input"
              name="lastName"
              value = {contactForm.lastName || ''}
              label="Nom"
              placeholder="Nom"
              variant="filled"
              onChange= {handleChange}
            />
          </div>
          <div className="contact__message">
            <TextField className="contact__message__field"
              required
              id="filled-required"
              name="email"
              value = {contactForm.email || ''}
              label="Email"
              placeholder="Email"
              type= "email"
              pattern=".+@globex\.com"
              variant="filled"
              onChange= {handleChange}
            />
          </div>
          <div className="contact__message">  
            <TextField className="contact__message__field"
              id="filled-number"
              name="phone"
              value = {contactForm.phone || ''}
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
            <TextField className="contact__message__field"
              id="filled-helperText"
              name="subject"
              label="Objet de votre demande"
              //placeholder="Objet de votre demande"
              value = {contactForm.subject || ''}
              // defaultValue="Default Value"
              //helperText="Objet de votre demande"
              variant="filled"
              onChange= {handleChange}
            />
          </div>
          <div className="contact__message">  
            <TextField className="contact__message__field"
              required
              id="outlined-multiline-static"
              name="message"
              value = {contactForm.message || ''}
              label="Message"
              multiline
              variant="filled"
              onChange= {handleChange}
              rows={5}
              //defaultValue="Default Value"
            />
          </div>
          <div className="contact__message">  
            <Button 
              sx={{'margin': '5px'}}  
              id="submit" 
              className="contact__message--submit" 
              type="submit" 
              variant="contained">Submit
            </Button>
          </div>

        <div className={contactForm.emailSent ? 'visible' : 'hide'}>
          <Stack className="contact__message--confirm">
              <Alert id="alert" className="contact__message--confirm--alert"
               severity="success">
                <span className="contact__message--confirm--alert--text">Thank you for your message, we will be in touch in no time!
                </span>
              </Alert>
          </Stack>
        </div>  
      </Box>
    </div>
    <div className={isDarkMode ? 'divider' : 'divider light'}></div>
    </>
  );


}
export default Contact;
