import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

// Define your CSS styles as a styled component
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  grid-auto-rows: minmax(250px, auto);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EventCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 1.5em;
`;

const ResponsiveTable = styled.table`
  width: 100%;
  @media (max-width: 768px) {
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
      text-align: left;
    }
    td:last-child {
      margin-top: 10px; // Adjust as needed
    }
  }
`;

const TempleExpansion = () => {


  return (
    <div class="home-container" style={{ padding:'20px 60px' }}>
    <div class="card1" >
        <div class="title">Donations for Temple Expansion</div>
        <p class="p2">Sri Yoga Hanuman Temple is in need of immediate expansion. The temple is now in a rented premises with 
          the exorbitant rent. Furthermore, the space is very limited for our huge idols and it is insufficient to perform all the rituals.
           We do not have any facility for doing annadanam and yagam. In order to address this issue and better accommodate devotees, the temple urgently 
           requires larger premises. As such, the temple is seeking support from its followers to make this possible.<br/><br/>

        With the divine grace of Sri Yoga Hanuman, many of our devotees have succeeded and owned comfortable homes and the time has come 
        for us to provide a shelter to mighty hanuman.<br/><br/>

        Our temple expansion project is expected to cost $11 million. The project will be implemented in two phases, Phase1 - $3 Million 
        & Phase2 - $8 Million. The first phase will involve land acquisition and the construction of a temporary temple. The second phase will see the 
        completion of the main temple along with Goshala. To support the temple expansion initiative, SYHCS is introducing the "Sri Maha Lakshmi Coin Program". 
        Devotees who contribute to the expansion of the temple will receive an energized coin of "Sri Maha Lakshmi".<br/><br/>

        Donors have the option to make their contributions either as a one-time payment, in installments or pledge now and pay later. We are a registered Charity
         and you may be able to get significant amount back as tax credit.</p><br/><br/>
         <CardGrid>
         <EventCard style={{ backgroundColor: '#808080', color: 'white' }}>
          PLATINUM <br/><br/>
          <p style={{fontSize: '18px'}}>Yuva Raja Poshaka<br/>
          25,000 CAD<br/>
          Sri MahaLakshmi Gold Coin & Name on Donor's wall</p><br/><br/>
          <p style={{fontSize: '16px'}}>*Get up to CAD 11,398 back
          as Tax credit</p>
        </EventCard>
        <EventCard style={{ backgroundColor: '#D4AF37', color: 'white' }}>
        GOLD <br/><br/>
          <p style={{fontSize: '18px'}}>Maha Daata<br/>
          10,000 CAD<br/>
          Sri MahaLakshmi Gold Coin</p><br/><br/>
          <p style={{fontSize: '16px'}}>*Get up to CAD 4,500 back
          as Tax credit</p>
        </EventCard>
        <EventCard style={{ backgroundColor: '#C0C0C0', color: 'white' }}>
        SILVER <br/><br/>
          <p style={{fontSize: '18px'}}>Bhoomi Daata<br/>
          5,000 CAD<br/>
          Sri MahaLakshmi Silver Coin</p><br/><br/>
          <p style={{fontSize: '16px'}}>*Get up to CAD 2,200 back
          as Tax credit</p>
        </EventCard>
        <EventCard style={{ backgroundColor: '#CD7F32', color: 'white' }}>
        BRONZE <br/><br/>
          <p style={{fontSize: '18px'}}>Devalaya Nirmana Daata<br/>
          2,000 CAD<br/>
          Sri MahaLakshmi Bronze Coin</p><br/><br/>
          <p style={{fontSize: '16px'}}>*Get up to CAD 850 back
          as Tax credit</p>
        </EventCard>
        </CardGrid>
        <br/><br/>
        <ResponsiveTable>
          <tbody>
            <tr>
              <td>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/InteracLogo 1.png')} alt="Interac logo" style={{ marginLeft: '10px' }} />
                  <FaEnvelope style={{ margin: '10px' }} />
                  <b align="left" style={{ margin: '10px' }}>yhbcca@gmail.com</b>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginRight: '60px' }}>
                  <img src={require('./IconImages/blank-check-cheque.png')} alt="cheque" />
                  <b style={{ marginLeft: '10px' }}>Payable at Sri Yoga Hanuman Cultural Society</b>
                </div>
              </td>
            </tr>
            <tr><td colSpan="2" align="center"><b>*Disclaimer: please approach your CPA for more details on Tax Credit</b></td></tr>
          </tbody>
        </ResponsiveTable>
      {/* Add page content */}
      </div>
    </div>
  );
};

export default TempleExpansion;
