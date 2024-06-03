
import React from 'react';
import Product from './Product';

export default function ProductsList({ products, addProductToCart }) { 
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-column">
          <Product {...product} addToCart={addProductToCart} /> 
        </div>
      ))}
    </div>
  );
}

