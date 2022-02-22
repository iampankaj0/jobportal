import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTelegram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../assets/css/footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer-sec">
        <div className="app_wrapper">

          <div className="footer-social-links">
            <h3>Quick Links</h3>
            <Link to='/' className='facebook'> <span> <FaFacebookSquare fontSize={20} style={{ marginRight: '7px', marginBottom: '-4px' }} /> </span> <span>Facebook</span> </Link>
            <Link to='/' className='insta'> <span> <FaInstagramSquare fontSize={20} style={{ marginRight: '7px', marginBottom: '-4px' }} /> </span> <span>Instagram</span> </Link>
            <Link to='/' className='twitter'> <span> <FaTwitterSquare fontSize={20} style={{ marginRight: '7px', marginBottom: '-4px' }} /> </span> <span>Twitter</span> </Link>
            <Link to='/' className='linkedin'> <span> <FaLinkedin fontSize={20} style={{ marginRight: '7px', marginBottom: '-4px' }} /> </span> <span>LinkedIn</span> </Link>
            <Link to='/' className='telegram'> <span> <FaTelegram fontSize={20} style={{ marginRight: '7px', marginBottom: '-4px' }} /> </span> <span>Telegram</span> </Link>
            <Link to='/' className='youtube'> <span> <FaYoutube fontSize={20} style={{ marginRight: '7px', marginBottom: '-4px' }} /> </span> <span>Youtube</span> </Link>
          </div>

          <div className="footer-who">
            <h3>Who We Are</h3>
            <p>All information about Government Jobs and Rojgar results can be found on sarkaaripariksha.com. It is now easy to log into sarkaaripariksha.com and find out everything that you would want to know about most of the Government exams and Sarkari Informations.</p>
          </div>

          <div className="footer-morelinks">
            <h3>More Links</h3>
            <Link to='/latestjob'> Latest Jobs </Link>
            <Link to='/result'> Result </Link>
            <Link to='/'> About Us </Link>
            <Link to='/admitcard'> Admit Card </Link>
            <Link to='/answerkey'> Answer Key </Link>
            <Link to='/contact'> Contact Us </Link>
          </div>



        </div>
      </section>
    </>
  )
}

export default Footer;