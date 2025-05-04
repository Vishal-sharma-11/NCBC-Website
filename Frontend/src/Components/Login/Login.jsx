import { useState } from "react";
import { User, Lock, Eye, EyeOff, Info, HelpCircle } from "lucide-react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);

      fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON data
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json()) // Parse JSON response
        .then((data) => {
          console.log("Success:", data);

          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("username", data.user.username);
          // Store user role

          if (data.user.role === "admin") {
            navigate("/admin/dashboard/");
          }
          if (data.user.role === "SO") {
            navigate("/so/dashboard/");
          }
          if (data.user.role === "ASO") {
            navigate("/aso/dashboard");
          }
          setShowLogin(false);
        })
        .catch((error) => console.error("Error:", error));
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      {/* Header */}
      <div className="portal-header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo">LOGO</div>
          </div>
          <div className="header-text">
            <h1>Government Portal</h1>
            <p>Ministry of Social Justice and Empowerement</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="login-main-content">
        <div className="login-content-wrapper">
          {/* Left side - Login form */}
          <div className="login-section">
            <div className="login-header">
              <h2>User Login</h2>
              <p>Please enter your credentials to access the portal</p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="login-form-group">
                <label htmlFor="username">Email</label>
                <div className="login-input-group">
                  <div className="login-input-icon">
                    <User size={18} />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="email"
                    // value={formData.username}

                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label htmlFor="password" hidden>
                  Password
                </label>
                <div className="login-input-group">
                  <div className="login-input-icon">
                    <Lock size={18} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    // value={formData.password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="login-form-options">
                <div className="login-remember-me">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>

              <div className="login-form-submit">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>

              <div className="login-register-link">
                <p>
                  Don't have an account? <a href="#">Register here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
