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
    <div class="home-container">
       <Carousel autoPlay interval={5000} infiniteLoop  showThumbs={false} className="custom-carousel">
        {images.map((image, index) => (
          <div key={index}>
            <img class="carousel-image" src={image} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div class="welcomeNoteCard">
      <div class="content1"><img src={require('./IconImages/Hanuman Logo.jpeg')} alt="Interac logo" style={{ width:'80px',marginLeft: '10px' }} />
          <b><p>Welcome to Shri Yoga Hanuman Temple</p></b>
 <h5>( Shri Hanumath sametha Shiva Vishnu Temple )</h5>

<p >Founded by Shri Rama Shakti Guruji in 2010.

Temples have always been central institutions to protect and preserve the great values
of our ancient heritage. Our institution recognizes this important role and has acted as a sign of continuity and development of our cultural, social, educational and charitable values.</p>
      </div>
      </div>
      
      <div class="card-grid">
        {/* Card 1 */}
        <div class="card">
          <div class="title">Sevas</div>
          <div class="content">
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
         <div class="note">
    <i>Note: Please contact Temple for above sevas details</i>
  </div>   
          
        </div>

        {/* Card 2 */}
        

        {/* Card 3 */}
        <div class="card">
          <div class="title">Priest Services</div>
          <div class="content">
            <ul>
                <li> Griha Pravesham</li>
                <li> Annaprashan</li>
                <li> Satyanarayana Pooja</li>
                <li> Ganesha Homam</li>
                <li> Navagraha Shanti</li>
                <li> Maha Sudarshana Homam</li>
                
            </ul></div>
            <div class="note">
    <i>Note: Please contact Temple to book the above services</i>
  </div>   
          
        </div>

        {/* Card 4 */}
        

        {/* Card 5 */}
        
        
        <div class="card">
          <div class="title">Donations</div>
          <div class="content">
            <ul>
            
                <li><a href="/TempleExpansion" style={{textDecoration: 'none' }}>Temple Expansion Program</a></li>
                <li><a href="/TempleMaintainence" style={{textDecoration: 'none' }}> Priest Welfare</a></li>
                <li><a href="/TempleMaintainence" style={{textDecoration: 'none' }}> Prasadam Sponsorship</a></li>
                <li><a href="/TempleMaintainence" style={{textDecoration: 'none' }}> Monthly Contributions</a></li>
                <li><a href="/TempleMaintainence" style={{textDecoration: 'none' }}> Fruits and Flowers</a></li>
                <li><a href="/TempleMaintainence" style={{textDecoration: 'none' }}> Groceries</a></li>
            </ul>
          </div>
          <div class="note">
    <i><b>Note: Please click on list items to view details for donation</b></i>
  </div>   
          </div>
          
        
        
        {/* Card 6 */}
        
      </div>
    </div>
  );
}

export default Home;
