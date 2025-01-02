import React, { useState } from "react";
import "./Email.css";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Function to validate email using regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(""); // Clear the error as user types
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required.");
    } else if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear the error on valid email
      alert(`Email submitted: ${email}`);
      setEmail(""); // Clear the input field
    }
  };

  return (
    <div className="container-footer">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        className="email-input"
      />
      <button onClick={handleSubmit} className="subscribe-button">
        Subscribe
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EmailInput;
