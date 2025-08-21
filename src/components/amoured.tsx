
import React, { useState, useEffect } from 'react';
import Amour from '../assets/PHOTO-2025-07-20-15-40-42.jpg'
import Amour1 from '../assets/PHOTO-2025-07-20-15-40-30.jpg'
import Amour2 from '../assets/PHOTO-2025-07-20-15-40-32.jpg'
import Amour3 from '../assets/PHOTO-2025-07-20-15-40-35.jpg'
import Amour4 from '../assets/PHOTO-2025-07-20-15-40-37.jpg'
import Amour5 from '../assets/PHOTO-2025-07-20-15-40-38.jpg'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/Navbar.css';


interface Trucks {
  id: number;
    avatar: string;
}

const trucks: Trucks [] = [
  {
    id: 1,
    avatar: Amour,
  },
  {
    id: 2,
    avatar: Amour1,
  },
  {
    id: 3,
    avatar: Amour2,
  },
  {
    id: 4,
    avatar: Amour4,
  },
  {
    id: 5,
    avatar: Amour5,
  },
];

const Trucks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate trucks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === trucks.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? trucks.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === trucks.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTrucks = trucks[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
     <div className='Armoured-section' >
        <h1 id='Amour' >Armoured Trucks</h1>
   
     <p> We supply secure and internationally certified armoured vehicles for high-risk logistics, VIP protection, and military operations.</p>
       

        <div className='Amoured-features' >
         
         <div className='feature-item'>
          <h3>Cash-in-transit vehicles</h3>
          <img src={currentTrucks.avatar} alt="Cash-in-transit vehicles" />
<div className='Navigation'>

<goToPrevious className='prev-button' onClick={goToPrevious}>&#10094;</goToPrevious>
          <goToNext className='next-button' onClick={goToNext}>&#10095;</goToNext>
    </div>
  <p>      
        Armoured Cash In Transit Vehicles (CITV)
Our Cash in Transit Vehicles (CITVs) ensure the safe and secure transport of cash and high-value assets, including bank deposits, ATM replenishments, coin distribution, precious asset transfers, and other critical operations. The vehicle options range from small pickup conversions to bulk carriers with a high payload capacity of up to 15 tons, with additional cargo space.

We integrate advanced security systems, locking mechanisms, and electronics to enable effective response tactics and ensure the safety of operating forces.
       
</p>
          </div>

        </div>  




</div>
    </section>
  );
};

export default Trucks;