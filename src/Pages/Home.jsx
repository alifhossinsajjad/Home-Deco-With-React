import React from 'react';
import { Link } from 'react-router';

import ProductCard from '../components/ProductCard';
import useProducts from '../Hooks/useProducts';
import Loading from '../components/Loading';

const Home = () => {
  // const products = useLoaderData()
  const { products, loading} = useProducts()
  // console.log(data);
  const featuredProducts = products.slice(0, 6)
  console.log(products);
  // 

  return (
    <div className='w-10/12 mx-auto p-10 my-10'>

      <div className='flex justify-between items-center py-5 '>
        <h1 className='text-2xl font-bold' >Featured products</h1>
        <Link className='btn btn-outline' to={'/products'}>Visit all Products</Link>
      </div>

      {
        loading ? <Loading /> :
          <div className='grid xl:lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
            {
              featuredProducts.map(product => <ProductCard key={product.id} product={product} />)
            }
          </div>
      }

    </div>
  );
};

export default Home; <h2>Hello Alif</h2>