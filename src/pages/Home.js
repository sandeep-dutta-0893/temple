import React from 'react';
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import './Home.css'; // Import your custom CSS file

function Home() {
  return (
    <div className="home-container">
       <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        //showIndicators={false} // Optional: Hide the indicators
        showThumbs={false} // Optional: Hide the thumbnail navigation
        className="custom-carousel" // Add a custom class for styling
      >
        <div>
          <img src={require('./All_Dieties.png')} alt="Slider 1" width="130" height="600" />
        </div>
        
        <div>
          <img src={require('./Sri_Venkateshawara_MahaLakshmi.png')} alt="Slider 2" width="130" height="600" />
        </div>
        <div>
          <img src={require('./Lord_Siva_Abirami.png')} alt="Slider 2" width="130" height="600" />
        </div>
        {/* Add more slider images */}
      </Carousel>

      
      <div className="card-grid">
        {/* Card 1 */}
        <div className="card">
          <div className="title">Daily Sevas</div>
          <div className="content">
          <ul>
               <li><a href="/">Divya Darshanam</a></li>
               <li><a href="/">Thirumanjanam</a></li>
               <li><a href="/">Archanam</a></li>
               <li><a href="/">example</a></li>
               <li><a href="/">example</a></li>
         </ul>     
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="title">Online Booking</div>
          <div className="content">
            <ul>
                <li><a href="/"> Prasadam Sponsorship</a></li>
                <li><a href="/"> Vishnu Sahasranamam</a></li>
                <li><a href="/"> Vehicle Pooja</a></li>
                <li><a href="/"> Thirumanjanam</a></li>
                <li><a href="/"> Hanuman Chalisa Pooja</a></li>
                <li><a href="/"> Sri Krishna Vaibhavam</a></li>
                <li><a href="/"> Navagraha Pooja</a></li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="title">Priest Services</div>
          <div className="content">
            <ul>
                <li><a href="/"> Griha Pravesham</a></li>
                <li><a href="/"> Annaprashan</a></li>
                <li><a href="/"> Satyanarayana Pooja</a></li>
                <li><a href="/"> Ganesha Homam</a></li>
                <li><a href="/"> Navagraha Shanti</a></li>
                <li><a href="/"> Maha Sudarshana Homam</a></li>
                <li><a href="/"> example</a></li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <a href="/TempleServices" style={{ textDecoration: 'none' }}>
        <div className="card">
          <div className="title">Temple Expansion Program</div>
          <div className="content">
            <ul>
                <li><a href="/"> Platinum Program</a></li>
                <li><a href="/"> Gold Program</a></li>
                <li><a href="/"> Silver Program</a></li>
                <li><a href="/"> Bronze Program</a></li>
                <li><a href="/"> Pledge and Pay later</a></li>
                <li><a href="/"> Pay in instalments</a></li>
                <li><a href="/"> Receipts</a></li>
            </ul>
          </div>
        </div>
        </a>

        {/* Card 5 */}
        <div className="card">
          <div className="title">Donations</div>
          <div className="content">
            <ul>
                <li><a href="/"> For Temple Maintenance</a></li>
                <li><a href="/"> Priest Welfare</a></li>
                <li><a href="/"> TEP</a></li>
                <li><a href="/"> Prasadam Sponsorship</a></li>
                <li><a href="/"> Monthly Contributions</a></li>
                <li><a href="/"> Fruits and Flowers</a></li>
                <li><a href="/"> Groceries</a></li>
            </ul>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card">
          <div className="title">Merchandise</div>
          <div className="content">
            <ul>
                <li><a href="/"> Photo of Sri Yoga Hanuman</a></li>
                <li><a href="/"> All Dieties image</a></li>
                <li><a href="/"> Idols for Car Dashboard</a></li>
                <li><a href="/"> T-Shirts</a></li>
                <li><a href="/"> Music CD's</a></li>
                <li><a href="/"> Kurtha's</a></li>
                <li><a href="/"> Bags</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
