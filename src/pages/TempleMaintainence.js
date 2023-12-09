import React from 'react';
import '../App.css';
import { FaEnvelope } from 'react-icons/fa';
 
function TempleMaintenance() {
 
  const openLink = (link) => {
    // Open the specified link in a new window or tab
    window.open(link, '_blank');
  };
 
  return (
    <div className="home-container" >
      <div className="card" style={{  backgroundColor: 'rgb(240, 244, 187',height: 'auto', width:'auto' }}>
        <div className="title">Donations for Temple Maintenance</div>
        <div className="card-grid1" style={{paddingLeft:'60px', paddingRight:'60px'}}>
          <div className="card" style={{ backgroundColor: '#F9E076', height: 'auto', width:'auto' }}>
          <div className="title" style={{color:'#fff', background: 'radial-gradient(circle, #ecc655, #b7412a)'}}><h3>One Time Donation</h3></div>
            <table>
              <tr><td><h4>Donate $1001</h4></td><td  style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/9AQaHTf4WatR4W4dR1')}>
              Click to Donate $1001
            </button></td></tr>
            <tr><td><h4>Donate $501</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/cN203f7CuatRbks7sC')}>
              Click to Donate $501
            </button></td></tr>
            <tr><td><h4>Donate $101</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/fZe5nzbSKgSfbks007')}>
              Click to Donate $101
            </button></td></tr>
            <tr><td><h4>Donate $51</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/cN24jv8GyatR1JS3ck')}>
              Click to Donate $51
            </button></td></tr>
            <tr><td><h4>Donate $25</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/aEUg2d6yqeK774c14d')}>
              Click to Donate $25
            </button></td></tr>
            <tr><td><img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ width:'40px',marginLeft: '10px' }} />
                  </td>
                  <td style={{textAlign:'center'}}><b style={{ margin: '10px' }}>&nbsp;yogahanumantemple@gmail.com</b></td>
              </tr>
            </table>
           
                 
                 
          </div>
 
          <div className="card" style={{ backgroundColor: '#F9E076', height: 'auto', width:'auto' }}>
          <div className="title" style={{color:'#fff', background: 'radial-gradient(circle, #ecc655, #b7412a)'}}><h3>Monthly Donations</h3></div>
            <table>
              <tr><td style={{textAlign:'center'}}><h4>SRI VAIKUNTAM $501</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/5kAaHT6yqdG3608eV0')}>
              Click to Donate $501
            </button></td></tr>
            <tr><td style={{textAlign:'center'}}><h4>SHIVA LOGAM $301</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/fZe17j0a20Thbks005')}>
              Click to Donate $301
            </button></td></tr>
            <tr><td style={{textAlign:'center'}}><h4>SATYA LOGAM $201</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/9AQbLX6yq31p88g9AE')}>
              Click to Donate $201
            </button></td></tr>
            <tr><td style={{textAlign:'center'}}><h4>THAPA LOGAM $101</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/5kA6rD8GyeK7fAIbII')}>
              Click to Donate $101
            </button></td></tr>
            <tr><td style={{textAlign:'center'}}><h4>MAHA LOGAM $51</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/14k03f4qidG374cdQS')}>
              Click to Donate $51
            </button></td></tr>
            <tr><td style={{textAlign:'center'}}><h4>BUVA LOGAM &nbsp;$25</h4></td><td style={{ paddingRight:'20px' }}><button onClick={() => openLink('https://buy.stripe.com/00g8zL2iadG34W47st')}>
              Click to Donate $25
            </button></td></tr></table>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ width:'60px', marginLeft: '10px' }} />
                  &nbsp;<FaEnvelope style={{ margin: '10px' }} />
                  <b align="left" style={{ margin: '10px' }}>yhbcca@gmail.com</b>
                </div>
           
          </div>
 
          <a href="/TempleExpansion" style={{textDecoration: 'none' }}>
          <div className="card" style={{ backgroundColor: '#F9E076', height: 'auto', width:'auto' }}>
          <div className="title" style={{color:'#fff', background: 'radial-gradient(circle, #ecc655, #b7412a)'}}><h3>Temple Expansion Program</h3></div>
              <p style={{textAlign:'center'}}><b>A Fund Raising Campaign for the “Temple Expansion”</b></p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ width:'40px',marginLeft: '10px' }} />
                  &nbsp;
                  <b align="left" style={{ margin: '10px' }}>&nbsp;yogahanumantemple@gmail.com</b>
                </div><br></br>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/blank-check-cheque.png')} alt="cheque" style={{ width:'60px', marginLeft: '10px'}} />
                  <b style={{ marginLeft: '10px', width:'100%' }}>Payable at Sri Yoga Hanuman Cultural Society</b>
                </div>
          </div>
          </a>
 
          <div className="card" style={{ backgroundColor: '#F9E076', height: 'auto', width:'auto' }}>
          <div className="title" style={{color:'#fff', background: 'radial-gradient(circle, #ecc655, #b7412a)'}}><h3>Priest Welfare</h3></div>
          <p style={{textAlign:'center'}}><b>Vedic Scholar Pandit, Suryanarayana from India invited as Priest for temple services</b></p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ width:'40px',marginLeft: '10px' }} />
                  
                  <b align="left" style={{ margin: '10px 0 10px 0' }}>&nbsp;yogahanumantemple@gmail.com</b>
                </div>
          </div>
 
          <div className="card" style={{ backgroundColor: '#F9E076', height: 'auto', width:'auto' }}>
          <div className="title" style={{color:'#fff',background: 'radial-gradient(circle, #ecc655, #b7412a)'}}><h3><img style={{marginBottom:'-5px'}}src={require('./IconImages/priceTag.png')} alt="priceTag"/>&nbsp;Rental Lease Payment</h3></div>
          <p style={{textAlign:'center'}}><b>The temple is now in a rented premises with the exorbitant rent. Sponsor / Donate Full ot Partial Rental Lease Payments</b></p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ width:'40px',marginLeft: '10px' }} />
                  
                  <b align="left" style={{ margin: '10px 0 10px 0' }}>&nbsp;yogahanumantemple@gmail.com</b>
                </div>
          </div>

          <div className="card" style={{ backgroundColor: '#F9E076', height: 'auto', width:'auto' }}>
          <div className="title" style={{color:'#fff',background: 'radial-gradient(circle, #ecc655, #b7412a)'}}><h3><img style={{height:'30px',marginBottom:'-8px'}}src={require('./IconImages/flowerRed.png')} alt="priceTag"/>&nbsp;Prasadam/Groceries/Pushpa Mala&nbsp;<img style={{height:'30px',marginBottom:'-8px'}}src={require('./IconImages/flowerBlue.png')} alt="priceTag"/></h3></div>
          <p style={{textAlign:'center'}}><b>Sponsor for Groceries, Prasadam, Fruits, Pushpa Mala (Flower Garland) every week</b></p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ width:'40px',marginLeft: '10px' }} />
                 
                  <b align="left" style={{ margin: '10px 0 10px 0' }}>&nbsp;yogahanumantemple@gmail.com</b>
                </div>
          </div>

 
        </div>
      </div>
    </div>
  );
}
 
export default TempleMaintenance;