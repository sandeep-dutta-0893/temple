import React from 'react';
import PropTypes from 'prop-types';

function TeamMemberCard({ name, position, description, imageUrl }) {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={`${name} - ${position}`} className="member-image" />
      <div className="member-details">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


function OnlineBookings() {
  const teamMembers = [
    {
      name: 'Sri Ram Shakti Bhattar',
      position: 'Founder',
      description: 'Guruji and Scholar',
      imageUrl: 'url_to_johns_image.jpg',
    },
    {
      name: 'Jatinder Bhan',
      position: 'President',
      description: 'President',
      imageUrl: 'url_to_johns_image.jpg',
    },
    {
      name: 'Jatinder Bhan',
      position: 'President',
      description: 'President',
      imageUrl: 'url_to_johns_image.jpg',
    },
    {
      name: 'Sri Hari',
      position: 'Secretary',
      description: 'Cultural Coordinator',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Rajesh Rajagopalan',
      position: 'Secretary',
      description: 'Cultural Coordinator',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Shashanka',
      position: 'Director',
      description: 'Fundraising and Cultural Coordinator',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Basu',
      position: 'Director',
      description: 'Human Resource and Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Ramanujam',
      position: 'Director',
      description: 'Treasurer',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Sravanthi',
      position: 'Director',
      description: 'IT and Media',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Prasanna',
      position: 'Director',
      description: 'Administration and Management Coordination',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Gopal Raju',
      position: 'Accountant',
      description: 'Administration and Management Coordination',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Vivekananada',
      position: 'Comitee Member',
      description: 'Advisor and Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Akila Ramani',
      position: 'Comitee Member',
      description: 'Public Relations',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Murali Balachandra',
      position: 'Comitee Member',
      description: 'Coordination and Event Management  - Sports',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Hemanth Puduru',
      position: 'Comitee Member',
      description: 'IT and Event Management  - Sports',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Raghavendra',
      position: 'Comitee Member',
      description: 'Fundraising and Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Raghavendra N',
      position: 'Comitee Member',
      description: 'IT Advisor and Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Hitesh',
      position: 'Comitee Member',
      description: 'Maintainence & Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Giridhar',
      position: 'Comitee Member',
      description: 'Maintainence & Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Ashwin',
      position: 'Comitee Member',
      description: 'Maintainence & Event Management',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Jaspreet',
      position: 'Volunteer',
      description: 'Maintainence Manager',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Ganeshan',
      position: 'Volunteer',
      description: 'Maintainence',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Balaji C',
      position: 'Volunteer',
      description: 'Kitchen assistance',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Balaji V',
      position: 'Volunteer',
      description: 'Maintainence Manager',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Sandeep Datta',
      position: 'Volunteer',
      description: 'IT',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Harsha',
      position: 'Paricharaka',
      description: '',
      imageUrl: 'url_to_johns_image.jpg',
    },
{
      name: 'Surya Narayana',
      position: 'Archaka/Priest',
      description: '',
      imageUrl: 'url_to_johns_image.jpg',
    }
    // Add more team members as needed
  ];
    return (
      <div className="home-container">
        <div className="card1">
            <div className="title">Our Team</div>
            <div className="card-grid1">
            {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      {/* Add page content */}
      </div>
    </div>
  );
};

export default OnlineBookings;