import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";

export default function HomePage({ products, addProductToCart }) {
 
  const getRandomProducts = () => {

    if (products.length < 6) {
      return products;
    } else {

      const shuffledProducts = products.sort(() => Math.random() - 0.5);
  
      return shuffledProducts.slice(0, 6);
    }
  };

  
  const randomProducts = getRandomProducts();

  return (
    <>
      <Header />

      <div className="page-inner-content">
        <div className="section-title">
          <h3>Produtos Selecionados</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          {}
          <ProductsList
            addProductToCart={addProductToCart}
            products={randomProducts}
          />
        </div>
      </div>

      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}

