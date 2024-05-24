import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";

// Data Fetching
async function getData() {
  const res = await fetch('https://dummyjson.com/products?limit=3')
  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  let data = await getData()

  return (
    <main className="home-page">
      <Hero/>
      <Products data={data.products}/>
      <Category/>
    </main>
  );
}