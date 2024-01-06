import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Product = () => {
  let { id } = useParams();
  const [items, setItems] = useState([]);
  // const [cartData, setCartData] = useState({
  //   products: [
  //     {
  //       productId: id,
  //       quantity: "",
  //     },
  //   ],
  //   timestamps: true,
  // });
  // const{productId} = id;
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/carts/",{
        id,
      });
      console.log(res.data);
      // setCartData(res)
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/find/${id}`)
      .then((item) => setItems(item.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="product-container">
        <div className="product-header">Product Details</div>
        <div className="product-details">
          <img src={items.image} alt={items.image} className="product-image" />
          <div className="product-info">
            <div className="product-title">{items.title}</div>
            <div className="product-category">{items.category}</div>
            <div className="product-price">${items.price}</div>
            <div className="product-description">{items.description}</div>
          </div>
        </div>
        <Link
          to={`/cart/${id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <button className="add-to-cart" onClick={handleSubmit}>
            Add to Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default Product;
