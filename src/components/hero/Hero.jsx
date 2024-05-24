import React from 'react'

// Images 
import HeroBg from '@/assets/images/hero-bg.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero-section'>
        <Image src={HeroBg} alt='hero bg'></Image>
        <div className="container">
            <div className="hero-section__content">
                <h5>Posted on <span>startup</span></h5>
                <h1>Step-by-step guide to choosing great font pairs</h1>
                <h4>By <span>James West</span>  |  May 23, 2022 </h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <button>Read More <span>&gt;</span></button>
            </div>
        </div>
    </div>
  )
}

export default Hero