import React from 'react';
import { Helmet } from 'react-helmet';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import FoundersPage from './pages/FoundersPage';
import TempleExpansion from './pages/TempleExpansion';
import TempleMaintainence from './pages/TempleMaintainence';
import UpcomingEvents from './pages/UpcomingEvents';
import PriestServices from './pages/PriestServices';
import OurTeam from './pages/OurTeam';
import Gallery from './pages/Gallery';

function App() {
  console.log(window.location)

  let Component;
  let pageTitle;

  switch (window.location.pathname) {
    case "/Home":
      Component = Home;
      pageTitle = "Home | Sri Yoga Hanuman Temple Cultural Society";
      break;
    case "/PriestServices":
      Component = PriestServices;
      pageTitle = "Priest Services | Sri Yoga Hanuman Temple Cultural Society";
      break;
    case "/UpcomingEvents":
      Component = UpcomingEvents;
      pageTitle = "Upcoming Events | Sri Yoga Hanuman Temple Cultural Society";
      break;
    case "/TempleExpansion":
      Component = TempleExpansion;
      pageTitle = "Donate for Temple Expansion | Sri Yoga Hanuman Temple Cultural Society";
      break;
      case "/TempleMaintainence":
        Component = TempleMaintainence;
        pageTitle = "Donate for Temple Maintainence | Sri Yoga Hanuman Temple Cultural Society";
        break;
    case "/FoundersPage":
      Component = FoundersPage;
      pageTitle = "About Us | Founder's Page | Sri Yoga Hanuman Temple Cultural Society";
      break;
      case "/OurTeam":
        Component = OurTeam;
        pageTitle = "About Us | Our Team | Sri Yoga Hanuman Temple Cultural Society";
        break; 
    case "/Gallery":
      Component = Gallery;
      pageTitle = "Gallery | Sri Yoga Hanuman Temple Cultural Society";
      break;
    
    default:
      Component = Home;
      pageTitle = "Home | Sri Yoga Hanuman Temple Cultural Society"; // default title
      break;
  }

  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header/>
      <Component/>
      <Footer/>
    </>
  );
}

export default App;
