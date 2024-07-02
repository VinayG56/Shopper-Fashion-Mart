import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import home from '../Assets/home.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        {/* <h2>New Arrivals Only</h2> */}
        <div>
            <div className="hero-hand-icon">
                <p>New </p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div onClick={'/newcollections'}>
            Latest Collection
                
                <img src={arrow_icon} alt="" />
            </div>
        </div>
      </div>
      <div className="hero-right">
            <img src={home} alt="" />
        </div>
    </div>
  )
}

export default Hero
