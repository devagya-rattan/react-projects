import React from "react";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <h1>Welcome to Our E-commerce Store</h1>
        <p className="intro-text">
          Discover a wide range of products that suit your needs.
        </p>
        <Link to="/products" className="intro-button">
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default Intro;
