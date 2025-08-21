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
        <meta name="description" content="Selby Amber Sourcing is a proudly Zimbabwean company that delivers innovative procurement, sourcing, and logistics solutions across Southern Africa. With a strong foundation in operational excellence and global trade partnerships, we specialize in high-demand sectors such as armored transport, industrial automation, auto spares, corporate apparel, and precious metals." />
        <meta name="keywords" content="import export, global trade, energy, mining, agriculture,Selby Amber Sourcing Group" />
        <link rel="canonical" href="https://www.Selbyambersourcing.com/" />
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
