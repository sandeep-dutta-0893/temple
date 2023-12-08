
import '../style.css';

import React,{ useEffect,useState }from 'react';


  
  


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);

  

  const handleMouseEnter = (content) => {
    setShowDropdown(true);
    setDropdownContent(content);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setDropdownContent(null);
  };


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
          <p className={`dropdown ${showDropdown && dropdownContent === 'donations' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('donations')}
            onMouseLeave={handleMouseLeave}>Donations
            
            {showDropdown && dropdownContent === 'donations' && (
              <div class="dropdown-content">
                <a href="/TempleExpansion">Temple Expansion</a>
                <a href="/TempleMaintainence">Temple Maintainence</a>
              </div>
            )}
          </p>
          
          <p className={`dropdown ${showDropdown && dropdownContent === 'aboutUs' ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter('aboutUs')}
            onMouseLeave={handleMouseLeave}>About Us
            
          {showDropdown && dropdownContent === 'aboutUs' && (
              <div class="dropdown-content">
               <a href="/FoundersPage">Founders Page</a>
                <a href="/OurTeam">Team</a>
              </div>
            )}
          </p>
          
          <a href="/Gallery">Gallery</a>
        
      </nav>
      </div>
    </header>
  );
};

export default Header;