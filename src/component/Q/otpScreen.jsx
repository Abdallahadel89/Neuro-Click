import React, { useState } from 'react';
import './otpScreen';

const OtpScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the OTP here
  };

  return (
    <div className="sms-otp-screen">
      <div className="sms-otp-screen__background" />
      <div className="sms-otp-screen__content">
        <h2>Enter your OTP</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone-number">Phone number</label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OtpScreen;