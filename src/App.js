import React from 'react';
import { Helmet } from 'react-helmet';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TempleServices from './pages/TempleServices';
import UpcomingEvents from './pages/UpcomingEvents';
import PriestServices from './pages/PriestServices';
import OnlineBookings from './pages/OnlineBookings';
import Gallery from './Gallery';

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
    case "/TempleServices":
      Component = TempleServices;
      pageTitle = "Temple Services | Sri Yoga Hanuman Temple Cultural Society";
      break;
    case "/About":
      Component = About;
      pageTitle = "About Us | Sri Yoga Hanuman Temple Cultural Society";
      break;
    case "/Gallery":
      Component = Gallery;
      pageTitle = "Gallery | Sri Yoga Hanuman Temple Cultural Society";
      break;
    case "/OnlineBookings":
      Component = OnlineBookings;
      pageTitle = "Online Bookings | Sri Yoga Hanuman Temple Cultural Society";
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
