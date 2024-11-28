import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    setIsLogin(false);
    setUser(null);
  };

  const login = (user) => {
    setUser(user);
    setIsLogin(true);
  };
  
  return (
    <AuthContext.Provider value={{ isLogin, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
