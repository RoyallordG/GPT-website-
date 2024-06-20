import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer section-padding'>
    <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
     <a href="">Request Early Access</a>
    <div className="footer-container">
      <div className="column">
         <div className="heading">
        <img src={logo} alt="" />
        </div>
        <span>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</span>
      </div>
      <div className="column">
        <div className="heading">
        <span>Links</span>
        </div>
        <span>Overons</span>
        <span>Social Media</span>
        <span>Counters</span>
        <span>Contact</span>
      </div>
      <div className="column">
        <div className="heading">
        <span>Company</span>
        </div>
        <span>Terms & Conditions</span>
        <span>Social Media</span>
        <span>Privacy Policy</span>
        <span>Contact</span>
      </div>
      <div className="column">
        <div className="heading">
        <span>Get in touch</span>
        </div>
        <span>Crechterwoord K12 182 DK Alknjkcb</span>
        <span>085-132567</span>
        <span>info@payme.net</span>
      </div>
    </div>
    <span className='foot-footer'>© 2021 GPT-3. All rights reserved.</span>
    </div>
  )
}

export default Footer