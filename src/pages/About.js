import React from 'react';
import '../styles/Navbar.css';
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-us-container">
        <div className='ContactheroCon' >
            <h1>About Us</h1> 

          <div className='ContactheroText' >
            <p>Get to Know us today and let's start a conversation!</p>
        </div>

        </div>
      
      <div className="about-us-wrapper">
        
        <h1 className="heading">About </h1>
        <h1 className="heading"> Selby Amber Sourcing</h1>

      <ScrollReveal >
      Selby Amber Sourcing Group (SASG) is a sourcing and supply company operating from Dubai in the United Arab Emiratesas a procurement and services
          </ScrollReveal>
          <ScrollReveal >
          Established in 2021 we are now trading and licenses in Southern and Eastern Africa with subsidi ary partners across Africa and the Middle East. In line with our mission, vision and we are buildi ng a large and valuable sourcing network to build a platform of business supply and services wit h a clear focus on Africa.
          </ScrollReveal>

      <ScrollReveal >
      We at SASG are for Innovative, Transformative & Agile sourcing with our customers at the heart o fall that we do. We offer a strong foundation in operational excellence and global trade partners hips specializing in high- demand sectors such as armoured CIT transport, industrial job deman d, auto spares, corporate apparel, and precious metals.
          </ScrollReveal>
    <ScrollReveal >
    Since our inception, we have built a reputation for delivering tailored sourcing strategies and logi stical support that align with the needs of both private enterprises and government institutions Our in- depth market intelligence and supplier networks ensure every client receives quality, co nsistency, and competitive value.
    </ScrollReveal>
       <div className="mission-vision">
      <div className="mission">
      <h2 className="subheading">Our Mission</h2>
      <ScrollReveal>
          To deliver world-class sourcing and supply chain services through integrity, innovation, and strategic partnerships
          empowering African businesses to compete globally.
          </ScrollReveal>
      </div>

   <div className="vision">
   <h2 className="subheading">Our Vision</h2>
      <ScrollReveal>
          To be the leading African sourcing partner for essential goods and services, recognized for operational reliability,
          ethical business practices, and sustainable growth.
          </ScrollReveal>
   </div>

       <div className="values">
       <h2 className="subheading">Core Values</h2>
       <ScrollReveal>
       To delivery with integrity, uphold transparency and ethical conduct in all our engagements.
       We strive for operational excellence embracing modern technologies to tailor solutions to each client’s specific needs and goals.
       </ScrollReveal>
       </div>
       </div>

      

        <h2 className="subheading">Coverage & Clients</h2>
      <ScrollReveal >
      We are legally licensed to operate in the United Arab Emirates, Uganda and Zimbabwe.
We operate across Eastern and Sothern Africa and neighbouring countries, serving a diverse clientele in mining, finance, government, logistics, and private enterprise sectors.
Our experience spans both small- and large-scale supply contracts.
          </ScrollReveal>

        <div className="closing">
          <p className="closing-text">
            Selby Amber Sourcing is not just a supplier—we are your strategic partner in building smarter, safer, and more
            efficient operations.
          </p>
          <Link to="/Contact" className="contact-link">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
