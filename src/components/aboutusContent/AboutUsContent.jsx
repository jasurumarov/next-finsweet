import Image from 'next/image'
import React from 'react'

// Images
import BlogImg1 from '@/assets/images/blog1.png'
import BlogImg2 from '@/assets/images/blog2.png'

const AboutUsContent = () => {
    return (
        <>
            <section className='about-section'>
                <div className="container">
                    <div className="about-section__content">
                        <div className="about__mision">
                            <h5>Our mision</h5>
                            <h3>Creating valuable content for creatives all around the world</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        </div>
                        <div className="about__vision">
                            <h5>Our Vision</h5>
                            <h3>A platform that empowers individuals to improve</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-section">
                <div className="container">
                    <div className="blog-section__content">
                        <div>
                            <h2>Our team of creatives</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                        <Image src={BlogImg1} alt='blog image'/>
                    </div>
                    <div className="blog-section__content">
                        <div>
                            <h2>Why we started this Blog</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                        <Image src={BlogImg2} alt='blog image'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsContent