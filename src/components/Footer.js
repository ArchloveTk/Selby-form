import React ,{useRef} from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Sas.png'
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from '@emailjs/browser';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

function Footer() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_w230y3j','template_hziocal', form.current, {
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
    <div className='footer' >

      <div className='footerCon' >
      <div>
      <img src={Logo} />
      </div>
      <div className='links' >
        <h2>Quick Links</h2>
     <Link to="/" >Home</Link>
              <Link to="/Service" >Services</Link>
              <Link to="/About" >About </Link>
              <Link to="/Careers" >Job Placements</Link>
              <Link to="/Contact">Contact</Link>
              
             
      </div>
      <div className='Links' >
        <h2>Get intouch</h2>
                 <Link to= "tel:+971 55 949 0637" >
                <label> <LocalPhoneOutlinedIcon /> +971 55 949 0637 </label>
                 </Link>
                 <a 
                   href="https://wa.me/971559490637" 
                   target="_blank" 
                    rel="noopener noreferrer"
                    >
                  <WhatsAppIcon className='whatsapp' />
                  <label>+971 55 949 0637</label>
                  </a>
                 <Link to="mailto:info@selbyambersourcing.com"   ><label><MailOutlineOutlinedIcon  />info@selbyambersourcing.com</label></Link>
      </div>
      <div className='Socials' >
        <h2> Join to our Newsletter</h2>
       <div className='newsletter' >
      <form ref={form} onSubmit={sendEmail} >
      <input type='textbox' name='email' placeholder='Enter your Email' required />
          <button type='submit' > Subscribe </button>
        </form>
     
       </div>

        <div className='socialIcons' >
        <a href="https://wa.me/971559490637" > <WhatsAppIcon/> </a>
        <Link to='https://instagram.com/selbyambersourcing' > <InstagramIcon/> </Link>
        <Link to='https://www.facebook.com/selbyambersourcing' ><FacebookIcon/> </Link>
        <Link to='https://www.linkedin.com/company/sasg-selby-amber-sourcing/posts/?feedView=all' > <LinkedInIcon/> </Link>
        
      </div>
        </div>
        </div>
        
      <div className='copyright' >
        <p>© 2024 Selby Amber Sourcing. All rights reserved.</p>
<p>Designed by <a href='https://arclovetech.pages.dev/' target='_blank' rel='noreferrer'>A.Tech</a></p>
    
    </div>
   
    </div>
  )
}

export default Footer
