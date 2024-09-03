import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/offer');
  };

  return (
    <div className="payment-container">
      <h1>99 Basic Business Listing Pack</h1>
      <h2>₹99 /monthly</h2>
      
      <div className="membership-info">
        <p><strong>Membership:</strong> Yes</p>
        <p><strong>Start Date:</strong> 09-06-2024</p>
        <p><strong>Expire Date:</strong> 09-07-2024</p>
        <p><strong>Total Cost:</strong> ₹99</p>
      </div>

      <div className="payment-method">
        <label htmlFor="paymentMethod">Payment Method</label>
        <select id="paymentMethod">
          <option value="phonepe-gpay">PhonePe or GPay</option>
          <option value="credit-card">Credit Card</option>
        </select>
      </div>

     
      <div className="payment-details">
        <p>You can pay using PhonePe or GPay at this number: <strong>+91 1234567890</strong></p>
        <p>After payment, please upload a screenshot of the payment. Thank you!</p>
        
        <div className="upload-section">
          <label htmlFor="receipt">Receipt*</label>
          <input type="file" id="receipt" />
          <p>** Receipt image must be .jpg / .jpeg / .png</p>
        </div>
      </div>

      <button className="checkout-button" onClick={handleCheckout}>Checkout Now</button>
    </div>
  );
};

export default PaymentPage;
