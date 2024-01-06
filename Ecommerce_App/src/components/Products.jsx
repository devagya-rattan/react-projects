import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/`)
      .then((item) => setItems(item.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="products-align">
        {items.map((data, index) => {
          return (
            <Link
              to={`/products/${data._id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <div className="product-card" key={index}>
                <img src={data.image} alt={data.image} />
                <div className="product-info">
                  <div className="product-title">{data.title}</div>
                  <div className="product-description">{data.description}</div>
                  <div className="product-category"> {data.category}</div>
                  <div className="product-price"> ${data.price} </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
