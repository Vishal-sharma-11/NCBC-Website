import { createContext, useState } from "react";

export const ToggledContext = createContext();

const ToggledProvider = ({ children }) => {
  const [toggled, setToggled] = useState(false);
  const [userRole, setUserRole] = useState("user"); // Default role

  return (
    <ToggledContext.Provider value={{ toggled, setToggled, userRole, setUserRole }}>
      {children}
    </ToggledContext.Provider>
  );
};

export default ToggledProvider;
