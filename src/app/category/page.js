import React from 'react'
import CategoryPage from '@/components/categoryPage/CategoryPage'

// Data Fetching
async function getData() {
    const res = await fetch('https://dummyjson.com/products?limit=4&skip=8')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Category = async() => {
    let data = await getData()
    return (
        <main className='category-page'>
            <CategoryPage data={data?.products} />
        </main>
    )
}

export default Category