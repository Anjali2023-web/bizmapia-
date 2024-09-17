import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { axiosConfig } from "../api/axiosConfig";
import registerImage from '../assets/register.png';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "customer",
    mobileVerificationCode: "", // New field for mobile verification
    emailVerificationCode: "", // New field for email verification
    currentLocation: {
      coordinates: [], // optional location
    },
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      businessName: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      email: "",
      role: "customer",
      mobileVerificationCode: "",
      emailVerificationCode: "",
      currentLocation: { coordinates: [] },
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const [passwordError, setPasswordError] = useState(""); // To handle password mismatch
  const [formMessage, setFormMessage] = useState(""); // To handle success/error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (formData) => {
    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("businessName", formData.businessName);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("password", formData.password);
      data.append("email", formData.email);
      data.append("role", formData.role);
      data.append("mobileVerificationCode", formData.mobileVerificationCode);
      data.append("emailVerificationCode", formData.emailVerificationCode);
      if (formData.currentLocation.coordinates.length > 0) {
        data.append(
          "currentLocation",
          JSON.stringify({
            coordinates: formData.currentLocation.coordinates,
          })
        );
      }
      const response = await axiosConfig.post("users/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle successful registration
      if (response.status === 201 && response?.data?.success == true) {
        alert("Registration successful! Redirecting...");
        setTimeout(() => {
          navigate("/login");
        }, 100);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
        setFormMessage(
          "Error: " + (error.response.data.message || "An error occurred.")
        );
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white">
      {/* Back Button */}
      <button
        type="button"
        className="absolute top-4 left-4 text-red-900 hover:underline"
        onClick={() => navigate("/home")}
      >
        &larr; Back to Home
      </button>

      {/* For larger screens */}
      <div className="hidden lg:flex lg:w-1/2 h-full">
        <img
          src={registerImage}
          alt="Description"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Form Section with responsive classes */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-8 md:px-12">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              biZ<span className="text-red-800">mapia</span>
            </h1>
            <h1 className="text-xl text-orange-900 font-sans">
              Register for a seamless experience
            </h1>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border rounded-md"
              required
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          {/* Business Name */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="businessName">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="w-full px-3 py-2 border rounded-md"
              required
              value={formik.values.businessName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.businessName && formik.errors.businessName ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.businessName}
              </div>
            ) : null}
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="role">
              User Role
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              id="role"
            >
              <option value="customer">customer</option>
              <option value="business">business</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-3 py-2 border rounded-md"
              required
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Mobile Verification Code */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="mobileVerificationCode">
              Mobile Verification Code
            </label>
            <input
              type="text"
              id="mobileVerificationCode"
              name="mobileVerificationCode"
              className="w-full px-3 py-2 border rounded-md"
              value={formik.values.mobileVerificationCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobileVerificationCode && formik.errors.mobileVerificationCode ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.mobileVerificationCode}
              </div>
            ) : null}
          </div>

          {/* Email Verification Code */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="emailVerificationCode">
              Email Verification Code
            </label>
            <input
              type="text"
              id="emailVerificationCode"
              name="emailVerificationCode"
              className="w-full px-3 py-2 border rounded-md"
              value={formik.values.emailVerificationCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailVerificationCode && formik.errors.emailVerificationCode ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.emailVerificationCode}
              </div>
            ) : null}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-md"
              required
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* Password Error Message */}
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-2 rounded-md hover:bg-slate-900"
            // disabled={formik.isSubmitting}
          >
            Register
          </button>

          {/* Form submission message */}
          {formMessage && (
            <p className="text-center text-red-600 mt-4">{formMessage}</p>
          )}

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

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  businessName: Yup.string().required("Business name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  mobileVerificationCode: Yup.string().required("Mobile verification code is required"),
  emailVerificationCode: Yup.string().required("Email verification code is required"),
  currentLocation: Yup.object().shape({
    coordinates: Yup.array().of(Yup.number()).optional(),
  }),
});

export default RegistrationForm;
