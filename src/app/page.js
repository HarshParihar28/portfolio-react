import React from 'react';
import './career/page.css';
import { FaHome, FaUser, FaCog, FaBriefcase, FaNewspaper, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaTiktok } from 'react-icons/fa';
const Sidebar = () => (
  <div className="sidebar">
    <div>
      <h1 className="logo">INDIA</h1>
      <nav className="navlinks">
        <a href="#" className="navitem"><FaHome /><span>Home</span></a>
        <a href="#" className="navitem"><FaUser /><span>About</span></a>
        <a href="#" className="navitem"><FaCog /><span>Service</span></a>
        <a href="#" className="navitem"><FaBriefcase /><span>Portfolio</span></a>
        <a href="#" className="navitem"><FaNewspaper /><span>News</span></a>
        <a href="#" className="navitem"><FaEnvelope /><span>Contact</span></a>
      </nav>
    </div>
  </div>
);

const MainContent = () => (
  <div className="maincontent">
    <img className="profileimg"
      src="https://thumblr.uniid.it/product/75319/9882b440f011.jpg"/>
      
    <h1 className="name">HARSH PARIHAR</h1>
    <p className="description">
      2nd year student love to learn new coding languages and make projects.
    </p>
    <div className="socialicons">
        <a href="#"><FaTiktok /></a>
        <a href="#"><FaInstagram /></a>
      <a href="#"><FaFacebookF /></a>
      <a href="#"><FaTwitter /></a>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="appcontainer">
      <Sidebar />
      <MainContent />
    </div>
  );
}
