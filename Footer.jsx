import React from 'react'
import './Footer.css';
import logo from '../assets/image/PNG-Photoroom.png';

const Footer = () => {
  return (
    <div className="footer-main-container">
    <div className='footer-container'>
      <div className="services">
        <h1>Services</h1>
        <ul>
            <li>Recruitment & Staffing</li>
            <li>Outsourcing</li>
            <li>Training and developement</li>
            <li>Career Counseling</li>
            <li>Attendance Payroll Management</li>
        </ul>
      </div>
      <div className="links">
        <h1>Important Links</h1>
        <ul>
            <li>Campus placement</li>
            <li>HR Consulting</li>
            <li>Contact Manpower Services</li>
            <li>Permanent Staffing</li>
            <li>Temporary Staffing</li>
        </ul>
      </div>
      <div className="morelink">
        <h1>More links</h1>
        <ul>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Execlub</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="content">
          <img src={logo} alt="not found" />
        <p>At Makevisionsoutsourcing, we hire detail-oriented people who strive to provide our clints with the best assistance on the planet</p>
      </div>
      </div>
      <hr />
      <div className="para">makevisionoutsourcing.in 2024.Designed & Developed By make Visions Outsourcing Pvt Ltd</div>
    </div>
  )
}

export default Footer;
