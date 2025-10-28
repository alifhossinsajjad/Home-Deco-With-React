import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

const Products = () => {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')

  const term = search.trim().toLowerCase()
  const searchedProducts = term ? products.filter(product => product.name.toLowerCase().includes(term)) : products



  return (
    <div className='w-10/12 mx-auto p-10 my-10'>
      <h2 className='text-center mb-10 text-2xl font-bold'>My ALl {searchedProducts.length} products</h2>
      <div className='flex justify-between items-center py-5 '>
        <h1 className='text-2xl font-bold' >ALl products products </h1>

        <label className="input">
          <input onChange={(e) => { setSearch(e.target.value) }}
            value={search}
            type="Search" placeholder="Search" />
        </label>
      </div>
      {
        loading ? <Loading counter={16}/> :
          <div className='grid xl:lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
            {
              searchedProducts.map(product => <ProductCard key={product.id} product={product} />)
            }
          </div>
      }
    </div>
  );
};

export default Products;