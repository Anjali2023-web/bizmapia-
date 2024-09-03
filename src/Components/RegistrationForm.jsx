import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    email: "",
    type: "Business",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://popzup.in/popzup/user/register",
        formData,
        { 
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("====================================");
      console.log(response?.data);
      console.log("====================================");
      if (response.status === 200 && response?.data?.status === true) {
        console.log("Registration successful", response.data);
        alert("Registration successful");
        navigate("/login"); // Redirect to the success page
      } else {
        console.error("Registration failed", response);
        alert("Registration failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="hidden lg:flex lg:w-1/2 h-full">
        <img
          src="https://img.freepik.com/free-vector/flat-design-family-tree-silhouette_23-2150410119.jpg?t=st=1721142642~exp=1721146242~hmac=f1ea39c126026dcaf7aa850274a6e7d42a51c49855e57553da961ac87f32efbc&w=740"
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex h-full justify-center items-center px-16">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-lg"
        >
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              bis<span className="text-red-800">mapia</span>
            </h1>
            <h1 className="text-xl text-orange-900 font-sans">
              Register for a seamless experience
            </h1>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="businessName">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
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
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2 rounded-md hover:bg-slate-900"
          >
            Register
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-slate-800 hover:underline">
                Log in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
