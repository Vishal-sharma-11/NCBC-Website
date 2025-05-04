export const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Check if a token exists
};

export const getUserRole = () => {
  return localStorage.getItem("role");
};

export const login = (role) => {
  localStorage.setItem("token", "dummy-auth-token"); // Simulating authentication
  localStorage.setItem("role", role); // Store user role as it is
  localStorage.setItem("email", email); // Store username or email
  localStorage.setItem("username",username);
  
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email",email);
  localStorage.removeItem("username",username);
};
