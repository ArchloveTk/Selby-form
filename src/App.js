import './App.css';
import TopNav from './components/TopNav'
import Navbar from "./components/navbar"
import Footer from './components/Footer';
import home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';  
import Service from './pages/Service'
import career from './pages/Careers';
import ScroltoTop from './components/ScrollToTop';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import {Helmet} from 'react-helmet';
import React from 'react';

  function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" /> 
        <meta name="description" content="Selby Amber Sourcing GroupSelby Amber Sourcing Group (SASG) is a sourcing and supply company operating from Dubai in the United Arab Emiratesas a procurement and services
          Established in 2021 we are now trading and licenses in Southern and Eastern Africa with subsidi ary partners across Africa and the Middle East. In line with our mission, vision and we are buildi ng a large and valuable sourcing network to build a platform of business supply and services wit h a clear focus on Africa
      We at SASG are for Innovative, Transformative & Agile sourcing with our customers at the heart o fall that we do. We offer a strong foundation in operational excellence and global trade partners hips specializing in high- demand sectors such as armoured CIT transport, industrial job deman d, auto spares, corporate apparel, and precious metals.
    Since our inception, we have built a reputation for delivering tailored sourcing strategies and logi stical support that align with the needs of both private enterprises and government institutions Our in- depth market intelligence and supplier networks ensure every client receives quality, co nsistency, and competitive value. is a proudly Zimbabwean company that delivers innovative procurement, sourcing, and logistics solutions across Southern Africa. With a strong foundation in operational excellence and global trade partnerships, we specialize in high-demand sectors such as armored transport, industrial automation, auto spares, corporate apparel, and precious metals." />
        <meta name="keywords" content="import export, global trade, energy, mining, agriculture,Selby Amber Sourcing Group" />
        <link rel="canonical" href="http://selbyambersourcing.com/" />
        <link rel="icon" type="image/png" href="selby.ico"/>
        <title>Selby Amber Sourcing Group </title>
        </Helmet>
      <BrowserRouter>
      <ScroltoTop>
   <Navbar/>
   <Routes>
      <Route path="/" exact Component={home} />
      <Route path="/Service" exact Component={Service} />   
      <Route path="/Careers" exact Component={career} />
      <Route path="/About" exact Component={About} />
      <Route path="/Contact" exact Component={Contact} />
    </Routes>
    <Footer/>
    </ScroltoTop>
   </BrowserRouter>
    </div>
  );
}

export default App;
