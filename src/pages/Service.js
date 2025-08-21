import React from 'react'
import '../styles/Navbar.css';
import Amour from '../assets/PHOTO-2025-07-20-15-40-42.jpg'
import CorporateWear from '../assets/Aesthetic.png'
import Automobile from '../assets/Auto Parts PNG Picture, Vector Cardboard Boxes And Auto Parts, Carton, Parts, Cartoon Parts PNG Image For Free Download.jpeg'
import PreciousMetals from '../assets/precious.jpeg'
import ProtectiveWear from '../assets/Best Quality coverall suppliers in Dubai.jpeg'
import Safety from '../assets/saftey.jpeg'
import ScrollReveal from '../components/ScrollReveal'
import AmouredSlider from '../components/amoured.tsx'
import AnimatedContent from '../components/AnimatedContent'
 import Brakes from '../assets/brakes.jpg'
import Suspension from '../assets/Suspension.jpg'
import Tyre from '../assets/tyres.jpg'
import { Link } from 'react-router-dom';




function Service() {


const services = [
  { 
    avatar: Amour,
    title: "Armoured Trucks",
    description: "We supply secure and internationally certified armoured vehicles for high-risk logistics, VIP protection, and military operations.",
    features: [
      "Cash-in-transit vehicles",
      "Armoured SUVs & personnel carriers",
      "Custom protection upgrades"
    ]
  },
  { 
    avatar: CorporateWear,
    title: "Corporate Wear",
    description: "Professional and customized uniforms tailored to your brand. We provide durable workwear, PPE, and embroidery services.",
    features: [
      "Customized uniforms",
      "Safety wear & PPE",
      "Embroidered branding"
    ]
  },
  {
    avatar: Automobile,
    title: "Automobile & Auto Spares",
    description: "Reliable sourcing of new and used vehicles, plus high-quality spare parts for both private and commercial needs.",
    features: [
      "Brand-new and used cars",
      "OEM & aftermarket spares",
      "Fleet procurement solutions"
    ]
  },
  {
    avatar: PreciousMetals,
    title: "Precious Metals",
    description: "We source and facilitate transactions in precious metals like gold, silver, and platinum. Trusted, secure, and compliant.",
    features: [
      "Gold bars & nuggets sourcing",
      "Export facilitation",
      "Licensed and secure networks"
    ]
  }
]; 

const Corporate = [
  { 
    avatar: Safety,
    title: "Safety Wear",
    description: "We supply high-quality, internationally certified safety wear designed to protect individuals in high-risk environments, ensuring maximum safety, comfort, and compliance for industries such as construction, mining, manufacturing, and security.",
   
  },
  { 
    avatar: CorporateWear,
    title: "Branded Wear",
    description: "Professional and customized uniforms tailored to your brand. We provide durable workwear, PPE, and embroidery services.",
   
  },
  {
    avatar: ProtectiveWear,
    title: "Protective Wear",
    description: "Reliable sourcing of durable and high-quality protective clothing designed for both industrial and commercial needs, ensuring safety, comfort, and compliance in every work environment.",
   
  }
]; 

const Autos = [
  { 
    avatar: Brakes,
    title: "Brakes",
    description: "We supply high-quality, internationally certified brake systems designed to ensure maximum safety, performance, and reliability for both private and commercial vehicles, meeting the needs of industries such as transport, logistics, construction, and mining.",
   
  },
  { 
    avatar: Suspension,
    title: "Suspension",
    description: "Professional and reliable suspension solutions tailored to your vehicle needs. We provide durable shock absorbers, struts, and suspension systems designed for comfort, stability, and long-lasting performance.",
   
  },
  {
    avatar: Tyre,
    title: "Tyre",
    description: "Reliable sourcing of durable and high-quality tyres designed for both private and commercial vehicles, ensuring safety, performance, and reliability on every road.",
   
  }
]; 




  return (
    <div className='service'>
      <div className='ContactheroCon' >
      <h1>Our Services</h1>
<h2>Selby Amber Sourcing Group</h2>
          <div className='ContactheroText' >
          <p>Delivering reliable, efficient, and quality sourcing solutions you can trust.
          We have the ability to connect our clients with top-tier products and services across Africa and beyond through the Middle East.</p>
        </div>

        </div>
        
        <div className='Services' >
    <h1>Our Services</h1>                  
   
   <ScrollReveal>  

      We offer a wide range of services to meet your needs, from import and export facilitation to global trade solutions. Our expertise ensures that your business thrives in the international market.
      
      </ScrollReveal>
      
      </div>

      <AnimatedContent>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
                    src={service.avatar}
                    alt={service.title}
                    className="service-avatar"
                  />
            <h2>{service.title}</h2>
           <ScrollReveal>
           {service.description}
            </ScrollReveal>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          
          </div>
        ))}
      </div>

      </AnimatedContent>
      <p id='truck' smooth ></p>
       <AnimatedContent> 
       
       <AmouredSlider  />
       </AnimatedContent>

       <p id='corporate' smooth ></p>

<div className='Coporate-section' >

        <h1 >CorporateWear</h1>
      <ScrollReveal>
      We supply secure and internationally certified armoured vehicles for high-risk logistics, VIP protection, and military operations.
        </ScrollReveal>

       <AnimatedContent>
        
       <div className='Amoured-features' >
         
         <div className="services-list">
         {Corporate.map((Corporate, index) => (
           <div className="corporate-card" key={index}>
             <img
                     src={Corporate.avatar}
                     alt={Corporate.title}
                     className="service-avatar"
                   />
             <h2>{Corporate.title}</h2>
            <ScrollReveal>
            {Corporate.description}
             </ScrollReveal>
            
             <Link to='/Contact' ><button className="service-button">Place Order</button> </Link>
           </div>
         ))}
       </div>
 
         </div>  

       </AnimatedContent>




</div>
<p id='auto' smooth ></p>
<div className="extra-services">
      {/* Automobiles & Auto Spare */}
      <section className="auto-service">
        <h2 className="auto-title">Automobiles & Auto Spare</h2>
        <p className="auto-text">
        We provide a wide range of automobiles and auto spare parts and customization add-ons to meet diverse client needs as a one stop shop for all your Automobile and their OEM or related Aftermarket requirements.
        </p>
        <AnimatedContent>
        
        <div className='Amoured-features' >
          
          <div className="services-list">
          {Autos.map((Autos, index) => (
            <div className="corporate-card" key={index}>
              <img
                      src={Autos.avatar}
                      alt={Autos.title}
                      className="service-avatar"
                    />
              <h2>{Autos.title}</h2>
             <ScrollReveal>
             {Autos.description}
              </ScrollReveal>
             
              <Link to='/Contact' ><button className="service-button">Place Order</button> </Link>
            </div>
          ))}
        </div>
  
          </div>  
 
        </AnimatedContent>
 
      </section>

      {/* Precious Metals */}
      <section className="metal-service">
        <h2 className="metal-title">Precious Metals</h2>
        <p className="metal-text">
        Source and sell gold from our certified network of mines and aggregators with origin and ethics certificates. We manage value adding logistics operations that promote development of our miners and can store your precious metals
        </p>
      </section>
    </div>

    </div>

        
  
  )
}

export default Service
