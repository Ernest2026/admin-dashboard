import React, { useEffect, useState } from "react";
import Item from "../components/Products/Item";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [dataCount, setDataCount] = useState(10);
  useEffect(() => {
    fetch(`/product.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, [dataCount]);
  const handleChange = (e) => setDataCount(e.target.value);
  return (
    <div>
      <h4>
        <strong>Products</strong>
      </h4>
      <hr />
      <div className="d-flex flex-row align-items-center mb-3">
        Show{" "}
        <span>
          <select
            onChange={handleChange}
            className="form-select form-select-sm mx-2"
            style={{ width: "unset" }}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </span>{" "}
        entries.
      </div>

      <div className="row g-0 justify-content-between">
        {products.length >= 1 &&
          products.map((data) => (
            <Item
              key={data.id}
              image={data.image}
              images={data.images}
              name={data.name}
              description={data.description}
              price={data.price}
              net_price={data.net_price}
              taxes={data.taxes}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
