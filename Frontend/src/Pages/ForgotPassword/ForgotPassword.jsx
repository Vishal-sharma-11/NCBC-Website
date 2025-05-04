import React, { useState } from "react";
import "./ForgotPassword.css"; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:3000/reset/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Reset link sent! Check your email.");
      console.log("Reset Link (dev only):", data.resetLink); // Dev use only
      setEmail(""); // Clear the email field after successful submission
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Forgot Password</h2>
      
      <form className="forgot-password-form" onSubmit={handleForgotPassword}>
        <div className="email-input-group">
          <input
            className="email-input"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        
        <button 
          className="submit-button" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
      
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      
      <p className="info-text">
        Enter the email address you used when you signed up and we'll send you instructions to reset your password.
      </p>
    </div>
  );
};

export default ForgotPassword;