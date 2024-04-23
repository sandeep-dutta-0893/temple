import React from 'react';
import '../style.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer class="footer-container">
      <table width="100%">
        <tbody>
          <tr>
            <td class="left-section">
              <h3>Contact Us</h3>
              <p>
                <FaMapMarkerAlt /> Sri Yoga Hanuman Cultural Society<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#4, 13415, Comber Way, Surrey, BC, Canada
              </p><br></br>
              <p>
                <FaEnvelope /> info@yogahanuman.org&nbsp;&nbsp; <FaPhone /> +1 778-780-1914
              </p>
              
            </td>
            <td class="right-section">
              <h3>Temple Hours</h3>
              <p><FaClock />&nbsp;&nbsp;Mon-Sun: 9:30AM to 8:30PM</p>
              <p>Wednesday: 9:30AM to 12:30PM</p><br></br><br></br>
            </td>
          </tr>
          <tr>
            <td colSpan="2" class="social-section">
              <h3>Follow Us:&nbsp;
              <a href="https://instagram.com/yogahanumantemplesurrey?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
              <a href="https://www.facebook.com/sriyogahanumantemple?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
              <a href="https://youtube.com/@yogahanumanculturalsociety?si=wbBtGgJkag8NpfMy" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
              <a href="https://chat.whatsapp.com/CMuu3IemD105rdw2MIz8TJ" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a></h3>
            </td>
          </tr>
          <tr>
            <td colSpan="2" class="copyright-section">
              <p>&copy; 2024 By Sri Yoga Hanuman Cultural Society, BC, CA</p>
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};

export default Footer;
