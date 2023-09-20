import React from 'react';
import '../style.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer-container">
      <table width="100%">
        <tbody>
          <tr>
            <td className="left-section">
              <h3>Contact Us</h3>
              <p>
                <FaMapMarkerAlt /> Sri Yoga Hanuman Cultural Society<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;#4, 13415, Comber Way, Surrey, BC, Canada
              </p><br></br>
              <p>
                <FaEnvelope /> info@yogahanuman.org&nbsp;&nbsp; <FaPhone /> +1 778-780-1914
              </p>
              
            </td>
            <td className="right-section">
              <h3>Temple Hours</h3>
              <p><FaClock />&nbsp;&nbsp;Mon-Fri: 8AM to 12PM & 3PM to 8PM</p>
              <p>Sat-Sun: 9AM to 1PM & 3PM to 8PM</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="social-section">
              <h3>Follow Us:&nbsp;
              <a href="/"><AiFillInstagram /></a>
              <a href="/"><AiFillFacebook /></a>
              <a href="/"><AiFillYoutube /></a>
              <a href="/"><AiOutlineWhatsApp /></a></h3>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="copyright-section">
              <p>&copy; 2023 By Sri Yoga Hanuman Cultural Society, BC, CA</p>
            </td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};

export default Footer;
