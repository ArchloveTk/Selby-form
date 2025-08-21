import React, { useState } from "react";
import '../styles/Navbar.css';
import ScrollReveal from "../components/ScrollReveal";
import Warehouse  from "../assets/Une ouvrière ingénieure heureuse d'Afrique noire aime travailler dans l'industrie de l'usine _ Photo Premium.jpeg"; 
import Hardware from "../assets/American worker working in factoryafrican american black man are operator control machine factory industrial _ Premium Photo.jpeg";
import BusDriver from "../assets/wmremove-transformed (1).jpeg";
import FoodProduction from "../assets/WhatsApp Image 2025-07-29 at 08.08.31 (1).jpeg";
import Delivery from "../assets/wmremove-transformed.jpeg";
import TruckDriver from "../assets/Happy african businessman giving thumb up inside new car _ Premium Photo.jpeg";
import AnimatedContent from "../components/AnimatedContent";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Germany from "../assets/Germany flag HD Paint.jpeg";
import Estonia from "../assets/Estonia Flag.jpeg";
import Slovakia from "../assets/'Slovakia Flag' Poster, picture, metal print, paint by Conceptual Photography _ Displate.jpeg";
import Czech from "../assets/Czech Republic Large Flag.jpeg";




function Careers() {
    const [formData, setFormData] = useState({
      name: "",
      surname: "",
      email: "",
      phone:"",
      country:"",
      countryB:"",
      jobType: "",
      message: "",
      passportPhoto: null,
      passportCopy: null,
      drivingLicense: null
    });
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (files) {
        setFormData({ ...formData, [name]: files[0] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = new FormData();
      data.append("name", formData.name);
      data.append("surname", formData.surname);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("country", formData.country);
      data.append("countryB", formData.countryB);
      data.append("jobType", formData.jobType);
      data.append("message", formData.message);
      data.append("passportCopy", formData.passportCopy);
      data.append("passportPhoto", formData.passportPhoto);
      data.append("drivingLicense", formData.drivingLicense);

      // Use your Render URL
const API_URL = "https://submit-form-oeof.onrender.com";
  
      try {
        const res = await fetch('${API_URL}/send-email', {
          method: "POST",
          body: data
        });
  
        const result = await res.json();
        alert(result.message);
      } catch (err) {
        alert("Failed to send. Please try again.");
        console.error(err);
      }
    };

    const mabasa =[
      { 
        avatar: Warehouse,
        title: "Warehouse",
      
      },
      { 
        avatar: FoodProduction,
        title: "Food Production",
       
       
      },
      {
        avatar: Hardware, 
        title: "Hardware",
        
       
      }
    ];

    const Mabasa =[
      {
        avatar: BusDriver,
        title: "Truck Driver",
      
      },
      { 
        avatar: Delivery,
        title: "Truck Driver",
      
      },
      { 
        avatar: TruckDriver,
        title: "Delivery",
        
       
       
      }
    ];
  
    return (
      


      <div className="careers-header">
<AnimatedContent>

<div className="careers-title">
<div className="JobFlag">
        <img src={Germany} alt="Bus Driver" className="job-image" />
        <img src={Slovakia} alt="Food Production" className="job-image" />
        <img src=""/>
        <img src={Czech} alt="Warehouse" className="job-image" />
        <img src={Estonia} alt="Delivery" className="job-image" />
        </div>

          <h1>Job Placements to Europe </h1>
          <p>Please let us know the job placement role you are interested in, the country, and the package. Use our form to provide the necessary information below. </p>
        
        </div>  


     <div className="JobContainer" >

      
      <div className="JobType" >
      <div className='mabasa-features' >
         
         <div className="mabasa-list">
         {mabasa.map((mabasa, index) => (
           <div className="mabasa-card" key={index}>
             <div className="mabasa-image">
             <img
                     src={mabasa.avatar}
                     alt={mabasa.title}
                     className="mabasa-avatar"
                   />
             <h2>{mabasa.title}</h2>
             <div className="star-icon-container">
            
             </div>
             </div>
            
           </div>
         ))}
       </div>

      <div className="mabasa-list">
         {Mabasa.map((Mabasa, index) => (
           <div className="mabasa-card" key={index}>
             <div className="mabasa-image">
             <img
                     src={Mabasa.avatar}
                     alt={Mabasa.title}
                     className="service-avatar"
                   />
             <h2>{Mabasa.title}</h2> 
           
            
             </div>
            
           </div>
         ))}
       </div>
 
         </div> 
         <div className="mabasa-description">
            <h1>How it Works</h1>
            <h2>Steps to get placed for the job confirmed</h2>
          <ul>
            <li> Select Basic / Premium Package by Job and Country</li>
            <li>We will share the job placement description and our service </li>
            <li>Submit Passport Copy / Photo on the Website Portal.</li>
            <li>We open your application with the Installment on your chose package, balance after confirmation of your contract / permit for visa processing</li>
          </ul>

         </div>

      </div>
      <div className="Jobform">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h2>Submission for Your Details and Documents</h2>
        <input name="name" type="text" placeholder="First Name" required onChange={handleChange} />
        <input name="surname" type="text" placeholder="Surname" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Phone Number" required onChange={handleChange} />
      
        <select name="countryB" type="text" required onChange={handleChange} className="country" >
          <option value="">Select Country(Basic Package)</option>
          <option value="Czech republic">Czech Republic </option>
          <option value="Slovakia">Slovakia</option>
          <option value="Estonia ">Estonia </option>
        </select> <br/>

        <select name="country" type="text" onChange={handleChange} className="country" >
          <option value="">Select Country(Premium package)</option>
          <option value="Germany ">Germany </option>
          
        </select> <br/>

        <select name="jobType" type="text" onChange={handleChange} className="country"  required >
          <option value="">Select Job Type</option>
          <option value="Warehouse">Warehouse </option>
          <option value="Delivery">Delivery</option>
          <option value="Driving Bus">Driving Bus</option>
          <option value="Driving Truck">Driving Truck</option>
          <option value="Food production">Food Production</option>
          <option value="Other">Other</option>
        </select> <br/>

        <textarea name="message" placeholder="Additional Information (optional)" onChange={handleChange} />
        <br/>
        <label>Passport Photo:</label>
        <input name="passportPhoto" type="file" accept="image/*" required onChange={handleChange} />
        <label>Passport Copy:</label>
        <input name="passportCopy" type="file" accept="image/*" required onChange={handleChange} />
        <label>International Driving License:</label>
        <input name="drivingLicense" type="file" accept="image/*,.pdf" required onChange={handleChange} />
        <button type="submit">Send</button>
        
      </form>

      </div>

     </div>

</AnimatedContent>
  </div>
    );
  }

export default Careers
