"use client"
import React from 'react'
import Image from 'next/image'

const Products = ({data}) => {
    let product = data?.map(el => (
        <div key={el.id} className="products__card">
            <Image width={405} height={318} alt='product image' src={el.images[0]}></Image>
            <h5>By <span>{el.brand}</span>   l   {el.warrantyInformation} </h5>
            <h3 title={el.title}>{el.title}</h3>
            <p>{el.description}</p>
        </div>
    ))
    return (
        <div className='products-section'>
            <div className="container">
                <div className="products-section__content">
                    <h2>Popular blogs</h2>
                    <div className="products__cards">
                        {product}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products