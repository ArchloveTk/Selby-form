import React, {useRef}from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// This is a placeholder for the Contact page component


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_w230y3j','template_1iiwt5t', form.current, {
          publicKey: 'WfDh8TBEW2qtSDAmZ',
        })
        .then(
            () => {
              alert('Message sent successfully!');
              form.current.reset(); // Clear the form
            },
            (error) => {
              console.error('FAILED...', error.text);
              alert('Failed to send message. Please try again.');
            }
          );
    };

  return (
    <div className='Contacthero' >
        <div className='ContactheroCon' >
            <h1>Contact Us</h1> 

          <div className='ContactheroText' >
            <p>Contact us today and let's start a conversation!</p>
        </div>

        </div>
     <div   className='Contact' >
     <div className='ContactForm' >
            <form ref={form} onSubmit={sendEmail} >
                <input type='text' name='name'  placeholder='Name'    required />
                <input type='email'  name='email'    placeholder='Email'required />
                <input type='text' name='subject'  placeholder='Subject'  required />
                <textarea   name='message'    placeholder=' Message'required></textarea>
                <button type='submit'>Send Message</button>
            </form>

            </div>
            <div className='ContactDetails' >
            <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you with any inquiries you may have.</p>
            <div className='SocialNet' >
                <div className='SocialNetCon' >
                   <Link to="tel:+971559490637" >
                    <LocalPhoneOutlinedIcon />
                   <label>+971 55 949 0637 </label>
                   </Link>

                </div>

                <div className='SocialNetCon' >
                <a 
                   href="https://wa.me/971585660767" 
                    target="_blank" 
                   rel="noopener noreferrer"
                  >
                  <WhatsAppIcon  />
                  <label>+971 55 949 0637</label>
                </a>
                    
                    </div>

            
                <div className='SocialNetCon' >
                   <Link to="mailto:info@selbyambersourcing.global" >
                    <fieldset>
                     <MailOutlineOutlinedIcon/>
                  <label>info@selbyambersourcing.com</label>
                    </fieldset>
                   </Link>
                </div>

                <div className='SocialNetCon' >
                <Link to="tel:0784967676" >
                    <LocationOnIcon/>
                   <label>Barsha Heights - Dubai - United Arab Emirates</label>
                   </Link> 
                    </div>
        

            </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
