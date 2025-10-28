import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {

  const { name, category, price, dimensions, stock, image, description , id} = product

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img className='object-cover rounded-t-xl'
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{category}</p>
        <p>{dimensions}</p>
        <p>{stock}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${id}`} className="btn btn-outline">Visit Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;