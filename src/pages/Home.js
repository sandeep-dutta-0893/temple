import React from 'react';
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import './Home.css'; // Import your custom CSS file

// Function to require all images from a specific folder
function importAll(r) {
  return r.keys().map(r);
}
// Import all images from the './HomePageImages' folder
const images = importAll(require.context('./HomePageImages', false, /\.(png|jpe?g|svg|jpg)$/));

function Home() {
  return (
    <div className="home-container">
       <Carousel autoPlay interval={5000} infiniteLoop  showThumbs={false} className="custom-carousel">
        {images.map((image, index) => (
          <div key={index}>
            <img className="carousel-image" src={image} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="welcomeNoteCard">
      <div className="content">

      </div>
      </div>
      
      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <div className="title">Sevas</div>
          <div className="content">
          <ul>
               <li>Divya Darshanam</li>
               <li>Thirumanjanam (Abishekam)</li>
               <li>Archanam</li>
               <li>Prasadam Sponsorship</li>
                <li>Vishnu Sahasranamam</li>
                <li>Vehicle Pooja</li>
                <li>Thirumanjanam</li>
                <li>Hanuman Chalisa Pooja</li>
                <li>Sri Krishna Vaibhavam</li>
                <li>Navagraha Pooja</li>
         </ul> </div>
         <div className="note">
    <i>Note: Please contact Temple for above sevas details</i>
  </div>   
          
        </div>

        {/* Card 2 */}
        

        {/* Card 3 */}
        <div className="card">
          <div className="title">Priest Services</div>
          <div className="content">
            <ul>
                <li> Griha Pravesham</li>
                <li> Annaprashan</li>
                <li> Satyanarayana Pooja</li>
                <li> Ganesha Homam</li>
                <li> Navagraha Shanti</li>
                <li> Maha Sudarshana Homam</li>
                
            </ul></div>
            <div className="note">
    <i>Note: Please contact Temple to book the above services</i>
  </div>   
          
        </div>

        {/* Card 4 */}
        

        {/* Card 5 */}
        
        <a href="/TempleServices" style={{textDecoration: 'none' }}>
        <div className="card">
          <div className="title">Donations</div>
          <div className="content">
            <ul>
            
                <li>Temple Expansion Program</li>
                <li> Priest Welfare</li>
                <li> Prasadam Sponsorship</li>
                <li> Monthly Contributions</li>
                <li> Fruits and Flowers</li>
                <li> Groceries</li>
            </ul>
          </div>
          </div>
          </a>
        
        
        {/* Card 6 */}
        
      </div>
    </div>
  );
}

export default Home;
