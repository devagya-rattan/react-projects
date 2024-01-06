import React from "react";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  // let { cartid } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/carts/`)
      .then((item) => setItems(item.data))
      .catch((err) => console.log(err));
  });
  // console.log(cartid)
  // console.log(items)
  return (
    <>
      <div className="cart-container">
        <div className="cart-header">Shopping Cart</div>
        {items.map((cart) => {
          return (
            <div>
              <div className="cart-item">
                {/* <img
                  src="product1.jpg"
                  alt="Product 1"
                  className="product-image"
                /> */}
                <div className="product-details">
                  <div className="product-title">{cart._id}</div>
                </div>
              </div>
            </div>
          );
        })}
        <Link to="/checkout" className="cart-total"> Checkout </Link>
      </div>
    </>
  );
};

export default Cart;
