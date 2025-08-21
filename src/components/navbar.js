import React from 'react';
import logo from '../assets/selby.png';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';



function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggle =() =>{
        setOpenLinks(!openLinks)
    }

  return (

    <div className='Navbar'>
        <div className='leftside' id={openLinks ? "open" : "close"} >
         <div className='logoIco'>
         <img src={logo} className='logo' / >
          <div className='logoText'>
          <h1>SAS</h1>
          <p>Selby Amber Sourcing Group</p>
          </div>
         </div>

         <div className='hiddenLinks'>
         <Link to="/" >Home</Link>
         <Link to="/Service" smooth={true} >Services</Link>
         <Link to="/About" smooth={true} >About </Link>
         <Link to="/Contact" smooth={true} >Contact</Link>
         <Link to="Careers" smooth={true} >Job Placement</Link>  
       </div>
         
        </div>
       <div className='rightside'>
       <Link to="/" >Home</Link>

         <Link to="/Service" smooth={true} >
         Services
         <div className='DropDown' id={openLinks ? "open" : "close"} >
        <HashLink to="/Service#truck" smooth={true} >Armoured</HashLink>
         <HashLink to="/Service#auto" smooth={true} >Automobile & Autospares</HashLink>
         <HashLink to="/Service#corporate" smooth={true} >Corporate Wear </HashLink> 
         </div>

         </Link>
         <Link to="/About" smooth={true} >About </Link>
         <Link to="Careers" smooth={true} >Job Placements</Link>  
         <Link to="/Contact" smooth={true} >Contact</Link>
        

         <button onClick={toggle} >
            <ReorderIcon/>
         </button>
       </div>

      

    </div>
   
    
  )
}

export default Navbar
