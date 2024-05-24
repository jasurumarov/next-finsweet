'use client'
import Image from 'next/image'
import React from 'react'

const CategoryPage = ({ data }) => {
    let categories = data?.map(el => (
        <div key={el.id} className="categories-article">
            <Image src={el.images[0]} alt={el.title} width={448} height={312}></Image>
            <div>
                <h5>{el.category}</h5>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
            </div>
        </div>
    ))
    return (
        <>
            <section className='bussiness-section'>
                <div className="container">
                    <div className="bussiness-section__content">
                        <h1>Business</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <h4>Blog &gt; Business</h4>
                    </div>
                </div>
            </section>
            <section className='categories-section'>
                <div className="container">
                    <div className="categories-section__content">
                        <input placeholder='Searching ...' type="search" />
                        {categories}
                    </div>
                        <article>
                            <p>&lt; Prev</p>
                            <p>1 2 ... 10</p>
                            <p>Next &gt;</p>
                        </article>
                </div>
            </section>
        </>
    )
}

export default CategoryPage