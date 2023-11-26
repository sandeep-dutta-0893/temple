
import '../style.css';

import React,{ useEffect }from 'react';


const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const winTop = window.scrollTop;
      if (winTop >= 30) {
        document.body.classList.add('sticky-header');
      } else {
        document.body.classList.remove('sticky-header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <header>
      <div className="header-content">
      <img src={require('./HeaderImages/templeHeader.png')} alt="Jai Sri Ram" />
      <nav>
      
          <a href="/">Home</a>
          <a href="/PriestServices">Pooja Services</a>
          <a href="/UpcomingEvents">Upcoming Events</a>
          <a href="/TempleServices">Donations</a>
          <a href="/Gallery">Gallery</a>
          <a href="/About">Founders</a>
          <a href="/OnlineBookings">Our Team</a>
        
      </nav>
      </div>
    </header>
  );
};

export default Header;
