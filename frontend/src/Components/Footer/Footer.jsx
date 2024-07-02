import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_icons">
        <div className="wrapper">
          <div className="icon whatsapp">
            {/* <div className="tooltip">Facebook</div> */}
            <span>
              <a href="" target="_blank" className='link'>
                <img src={whatsapp_icon} alt="" className='image'/>
              </a>
            </span>
            
          </div>
          <div className="icon pintester">
            {/* <div className="tooltip">Twitter</div> */}
            <span>
              <a href="" target="_blank" className='link'>
                <img src={pintester_icon} alt="" className='image'/>
              </a>
            </span>
          </div>
          <div className="icon instagram">
            {/* <div className="tooltip">Instagram</div> */}
            <span>
              <a href="" target="_blank" className='link'>
                <img src={instagram_icon} alt="" className='image' />
              </a>
            </span>
          </div>
        </div>
        </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023-All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
