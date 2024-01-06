import React,{useState} from "react";
import { BsCart } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { RiHome2Fill } from "react-icons/ri";


const Navbar = () => {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            E Commerce.com <SiFlipkart/>
          </a>
          <Link to="/">
              <RiHome2Fill/>
          </Link>
        </div>
        <div className="social-media">
          <a href="/">
            <FaFacebook/>
          </a>
          <a href="/">
            {" "}
            <FaTwitter/>
          </a>
          <a href="/">
            {" "}
            <FaInstagram/>
          </a>
        </div>
        <Link to="/register" className="register" onClick={() => setProgress(progress + 100)}>
          Register
        </Link>
        <Link to="/cart/:id" className="cart" onClick={() => setProgress(progress + 100)}>
          <BsCart/>
        </Link>
      </nav>
      <LoadingBar
        color='white'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
};

export default Navbar;
