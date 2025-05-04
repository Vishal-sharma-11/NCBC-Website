import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css"; // Import the CSS file

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "success" or "error"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) return;
    if (check !== password) {
      setMessage("Password do not match");
      return;
    }
    if (!password) {
      setMessage("Please enter a new password");
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `http://localhost:3000/reset/reset-password/${token}`,
        { password }
      );
      setMessage(res.data.message);
      setStatus("success");
      setPassword("");
      setCheck(""); // Clear the password field
    } catch (err) {
      setMessage(
        err.response?.data?.message || "An error occurred. Please try again."
      );
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validatePassword = (pwd) => {
    const rules = [
      { regex: /.{8,}/, message: "Minimum 8 characters" },
      { regex: /[A-Z]/, message: "At least one uppercase letter" },
      { regex: /[a-z]/, message: "At least one lowercase letter" },
      { regex: /\d/, message: "At least one digit" },
      {
        regex: /[!@#$%^&*]/,
        message: "At least one special character (!@#$%^&*)",
      },
    ];

    const failedRules = rules
      .filter((rule) => !rule.regex.test(pwd))
      .map((rule) => rule.message);

    setErrors(failedRules);
    return failedRules.length === 0;
  };

  return (
    <div className="reset-password-container">
      <h2 className="reset-password-title">Reset Your Password</h2>

      <form className="reset-password-form" onSubmit={handleSubmit}>
        <div className="password-input-group">
          <input
            type="password"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
            disabled={isSubmitting}
          />

          <input
            type="password"
            className="password-input"
            value={check}
            onChange={(e) => setCheck(e.target.value)}
            placeholder="Enter your new password"
            disabled={isSubmitting}
          />
        </div>

        <button className="reset-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Reset Password"}
        </button>
      </form>
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((err, index) => <li key={index}>{err}</li>)}
        </ul>
      )}

      {message && <div className={`message ${status}`}>{message}</div>}
    </div>
  );
}
