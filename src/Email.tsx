import React, { useState } from "react";

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
    <div style={{ marginTop: "20px" }}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "300px",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginLeft: "10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
      {error && (
        <p
          style={{
            color: "red",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
