import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosConfig } from "../api/axiosConfig";
import { useAuth } from "../context/AuthContext";
import lockImage from '../assets/lock.png';

const LoginForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, setUserData } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axiosConfig.post("users/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const accessToken = response.data?.data?.accessToken;
        const userData = response.data?.data?.user;
        console.log("userData-------->", userData);

        localStorage.setItem("token", accessToken);
        localStorage.setItem("userData", userData);
        login();
        setUserData(JSON.stringify(userData));
        alert("Login Successful");
        navigate("/dashboard");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      if (error.response) {
        setError(`Server error: ${error.response.status}`);
      } else if (error.request) {
        setError("No response received from server");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-white">
      {/* Left side image - Hidden on small screens */}
      <div className="hidden lg:flex lg:w-1/2 h-full">
        <img
          src={lockImage}
          alt="Lock Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          {/* Title Section */}
          <div className="text-left mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-darkblue-800">
              <span className="text-blue-900">biZ</span>
              <span className="text-blue-600">mapia</span>
            </h1>
            <h1 className="text-lg sm:text-xl text-blue-900 font-sans">
              Login for a seamless experience
            </h1>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-blue-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-blue-800" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 mb-4"
          >
            Login
          </button>

          {/* Links to Forgot Password and Create Account */}
          <div className="flex justify-between">
            <Link to="/resetpwd">
              <button type="button" className="text-blue-800 hover:underline">
                Forgot Password?
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="text-blue-800 hover:underline">
                Create Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
