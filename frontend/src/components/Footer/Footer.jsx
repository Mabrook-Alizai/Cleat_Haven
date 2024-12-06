import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non est labore sed, ducimus impedit error. Iste, nostrum quibusdam. Asperiores error, est molestias recusandae eligendi sint! Veniam explicabo nesciunt magni sint?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+44-2232-1122</li>
            <li>contact@cleathaven.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 © Cleat_Haven.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
