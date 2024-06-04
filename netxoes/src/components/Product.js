// Product.js

import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product({
  id,
  image,
  name,
  rate,
  price,
  addToCart,
}) {
  const [quantity, setQuantity] = useState(1);


  const interestRate = 0.0199; 
  const totalWithInterest = price * (1 + interestRate);
  const maxInstallments = Math.ceil(totalWithInterest / 10); 

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
      <span>R$</span>{price} 
      </p>

      <div className="buttons">
        <Link to="/products/123/checkout" className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <div className="quantity-container">
         
          <button
            onClick={() => addToCart(id, quantity)}
            className="btn-icon add-to-cart-btn"
          >
            <span>Adicionar ao carrinho</span>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>

      <div className="installment-info">
        <p>
          Quantidade máxima de parcelas: {maxInstallments}x
        </p>
        <p>
          Valor total com juros: R$ {totalWithInterest.toFixed(2)} 
        </p>
      </div>
    </div>
  );
}

