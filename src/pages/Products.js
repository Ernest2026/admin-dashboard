import React from "react";
import Item from '../components/Products/Item';
import GTR from '../images/nissan-gtr.webp';

const Products = () => {
  return (
    <div className='content'>
      <div className="answer-section-header-to">
      <center><h2>Products Page</h2></center>
      </div>

      <div className='product-item'>
      <Item 
      imgSrc={GTR}
      name="Nissan GTR"
      price="$12,000"
      net_price="$10,000"
      taxes="27"/>
      </div>
    </div>
  );
};

export default Products;

      

