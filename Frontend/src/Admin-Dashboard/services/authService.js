// User Login - Gets JWT Token
// Get Authenticated User
export const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Logout
export const logout = () => {
  
  localStorage.removeItem("token");
  
};

// Check if User is Logged In
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
