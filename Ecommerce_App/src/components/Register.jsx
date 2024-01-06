import React from "react";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const Register = () => {
  const notify = () => toast("User is Registered!");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password } = formData;
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      // navigate("/")
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="register-form">
        <div className="form-title">Register</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">User</label>
            <input
              value={username}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn" onClick={notify}>
            Register
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
