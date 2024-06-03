import React from 'react';
import Product from './Product';

export default function ProductsList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-column">
          <Product {...product} />
        </div>
      ))}
    </div>
  );
}
