import Image from 'next/image'
import React from 'react'

// Images
import CategoryIcon1 from '@/assets/icons/category-icon1.svg'
import CategoryIcon2 from '@/assets/icons/category-icon2.svg'
import CategoryIcon3 from '@/assets/icons/category-icon3.svg'
import CategoryIcon4 from '@/assets/icons/category-icon4.svg'

const Category = () => {
  return (
    <div className='category-section__content'>
        <div className="container">
            <div className="category-section__content">
                <h2>Choose A Catagory</h2>
                <div className="category__cards">
                    <div className="category__card">
                        <div>
                            <Image src={CategoryIcon1} alt='category icon 1'/>
                        </div>
                        <h3>Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>      <div className="category__card">
                        <div>
                            <Image src={CategoryIcon2} alt='category icon 1'/>
                        </div>
                        <h3>Startup</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>      <div className="category__card">
                        <div>
                            <Image src={CategoryIcon3} alt='category icon 1'/>
                        </div>
                        <h3>Economy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>      <div className="category__card">
                        <div>
                            <Image src={CategoryIcon4} alt='category icon 1'/>
                        </div>
                        <h3>Technology</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category