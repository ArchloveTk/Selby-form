import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Banner from '../assets/kaotaru-dCOuYgsm9X8-unsplash.jpg'
import Cataloge from '../assets/timelab.jpg'
import Oil from '../assets/oil.jpeg'
import jobs from '../assets/WhatsApp Image 2025-07-29 at 08.07.13.jpeg'
import Field from '../assets/zbynek-burival-GrmwVnVSSdU-unsplash.jpg'
import Mine from '../assets/beatriz-novaes-LSj8MOwnm4I-unsplash.jpg'
import badge from '../assets/badge.png'
import TeeTime from '../assets/Logo-removebg-preview.png'
import Huabao from '../assets/huabao-removebg-preview.png'
import atech from '../assets/ATECHLOGO.png'
import Terri from '../assets/TERRI-TECHNOLOGIES-LOGO-1.png'
import Nkateko from '../assets/Nkateko_International_trading-removebg-preview-removebg-preview__2_-removebg-preview.png'
import greenInnovation from '../assets/green-innovation.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import TestimonialsSlider from "../components/TestimonialsSlider.tsx";
import ScrollReveal from '../components/ScrollReveal'
import AnimatedContent from '../components/AnimatedContent'
import logo from '../assets/Sas.png';

function home() {
  return (
    <div className='home'  >
     <div className='header' style={{backgroundImage: `url(${Banner})`}} >
     <div className='headerContainer'>
        <h1>
        CONNECT YOUR BUSINESS TO A WORLD OF POSSIBILITIES
        </h1>
        <p>
        Global Sourcing, Trade Facilitation & Supply of Goods and Services
        </p>
        <Link to="/Service">Veiw Services</Link>  <Link to ="/Contact">Contact Us</Link>

        
      </div>
    

     </div>
     
      <div className='energyContainer' >

     
        <div className='energyRight' >
       
         <h1>
          Energizing the Future
          </h1>
          <ScrollReveal  baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10} >
          
          Discover the energy source that drives global progress. This highly valued liquid has been a cornerstone of economic growth, international trade, and daily life. Its influence extends far beyond industry, shaping the world as we know it. Learn more about this vital resource and its enduring impact.
  
          </ScrollReveal>
          <Link to='/About' >Read More</Link>
        
        </div >
        <div className='energyLeft' > 
          <img src={Oil} className='oil' /> 
          <img src={Field} className='Field' /> 

        </div>

    </div>
    
    <div className='energyContainer' >
    <div className='mineLeft' > 
          <img src={Mine} /> 

        </div>
        <div className='mineRight' >
          <h1>
          Precious Metals
          </h1>
        <ScrollReveal>
      
        Unlock the Value of Precious Metals: Extract, Ship and Trade with Confidence. A sustainable and equitable trading partnership for enhancing the value of African Precious Metals, lining African sellers with International Buyers in Dubai. Learn more and discover our expert precious metals sourcing and supply value adding programme.
        </ScrollReveal>
          <Link to='/About' >Read More</Link>
        </div >
     
    </div>


    <div className='Services' >
    <h1>Our Services</h1>                  

   <ScrollReveal>  

      We offer a wide range of services to meet your needs, from import and export facilitation to global trade solutions. Our expertise ensures that your business thrives in the international market.
      
      </ScrollReveal>
      
      </div>


      <AnimatedContent>

      <div className='Cataloge' style={{backgroundImage:`$url(${Cataloge})`}}>

<HashLink to="/Service#truck" >   
<div className='Cat1' > 
  <h2>01</h2>
 <p >Armoured Trucks</p>

<ArrowCircleRightOutlinedIcon/>
</div>
</HashLink>

<HashLink to="Service#auto" >
<div className='Cat2' > 
<h2>02</h2>
 <p>Automobile & Auto spares</p>
<ArrowCircleRightOutlinedIcon/>
</div>
</HashLink>

<HashLink to="/Service#corporate" >
<div className='Cat3' > 
<h2>03</h2>
 <p>Corporate Wear</p>

<ArrowCircleRightOutlinedIcon/>
</div>
</HashLink>

<HashLink to="/Careers" >
<div className='Cat4' > 
<h2>04</h2>
 <p>Job Placements</p>

<ArrowCircleRightOutlinedIcon/>
</div>
</HashLink>

</div>


      </AnimatedContent>
   
  
  <AnimatedContent>
    <div className='Cargo' >
    <h1>Our core service pillars</h1>
    <div className='CargoContainer' >

    <div className='CargoCard' >
      <img src={greenInnovation} />
      <h2>Innovative Solutions</h2>
      <ScrollReveal>
      We embrace modern technologies and data-driven processes.
        </ScrollReveal>
  
    </div>

    <div className='CargoCard' >
      <img src={badge} />
      <h2>Quality Services</h2>
    <ScrollReveal>
    Professional service providers for your supply chain and trade facilitation with global experience.
      </ScrollReveal>

    
    </div>

    <div className='CargoCard' >
      <img src={badge} />
      <h2>Partnership</h2>
     <ScrollReveal>
     We believe in building long-term relationships with clients and suppliers alike by offering reliable service, mutual trust, and competitive pricing.
          </ScrollReveal>
     

    
    </div>

    <div className='CargoCard' >
      <img src={badge} />
      <h2>Integrity</h2>
     <ScrollReveal>
     We uphold transparency, trust, and ethical conduct in all our engagements.
          </ScrollReveal>
  

    
    </div>

    </div>
    </div>

    </AnimatedContent>

 <AnimatedContent>



<div className='FindJob' >
<div className='FindJobContainer' >
<div className='FindJobText' >
<h2>Need A Job in Europe?</h2>
<p>Explore exciting career opportunities with us and take the next step in your professional journey.</p>
<Link to="/Careers" className='FindJobLink' >Find Jobs</Link>
</div>

<div className='FindJobContent' > 
<img src={jobs} alt="Jobs in Europe" />
</div>

</div>
</div>

    </AnimatedContent>

  <AnimatedContent>



 </AnimatedContent>



    <AnimatedContent>
    <div className='Partners' >
      <h2>Our Partners
      </h2>
      <div className='PartnersContainer' >
        <div className='PartnerCard' >
        <img src={atech} alt="A.Tech" />
        </div>
        <div className='PartnerCard' >
          <img src={Terri} alt="Terri Technologies" />
        </div>
      
        <div className='PartnerCard' >
          <img src={Huabao} alt="Huabao" />
        </div>

        <div className='PartnerCard' >
          <img src={TeeTime} alt="Tee Time" />
        </div>



    </div>
    </div>

    </AnimatedContent>

    </div>
  )
}

export default home
