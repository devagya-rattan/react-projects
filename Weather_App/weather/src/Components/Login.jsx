import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const failnotify = () =>
    toast.error("Email Already in use Try using another!");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navigate("/weather");
        console.log(user);
      })
      .catch(() => failnotify());
  };
  return (
    <>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <div style={{ fontSize: "25px" }}>Sign Up To App</div>
          <input
            type="email"
            value={email}
            placeholder="Enter your email here"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
