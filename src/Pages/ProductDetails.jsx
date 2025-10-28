import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import { updateList } from '../utils/LocalStorage';


const ProductDetails = () => {

    const { id } = useParams();


    const { products, loading } = useProducts()

    const product = products.find(p => String(p.id) === id) 

    if (loading) return <p>Loading......</p>

   const { name, category, price, dimensions, stock, image, description } = product || {}



//    const handleAddToWishList = () => {
//       const existingList = JSON.parse(localStorage.getItem('wishlist'))
//       let updatedList = []
//       if (existingList) {
//         const isDuplicate = existingList.some(p => p.id === product.id)
//         if (isDuplicate) return alert('Sorry vai')
//         updatedList = [...existingList, product]
//       } else {
//         updatedList.push(product)
//       }
//       localStorage.setItem('wishlist', JSON.stringify(updatedList))
//     }
    

    return (
        <div className="flex justify-center mx-auto card bg-base-100 w-96 shadow-sm my-10 ">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{price}</div>
                </h2>
                <p>{description}</p>
                <p>{category}</p>
                <p>{description}</p>
                <p>{dimensions}</p>
                <p>{stock}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> updateList(product)} className='btn btn-outline'>Add To Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;