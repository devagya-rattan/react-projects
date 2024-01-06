import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import  Checkout  from "./components/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/Products/:id" element={<Product />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/cart/:cartid" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
