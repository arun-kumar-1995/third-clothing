import { useEffect, useState, useCallback } from "react";
import "./Login.css";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

import csvFile from "../../data/users.csv?raw";
import { useCsvLoader } from "../../hooks/useCsvLoader";

import { Loader } from "../../components/Loader/Loader";
import { useToast } from "../../contexts/ToastContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const [csvData, csvError] = useCsvLoader(csvFile);
  const [loginInput, setLoginInput] = useState({ Username: "", Password: "" });
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const isLoading = !csvData || csvData.length <= 0;
  // console.log(isLoading);

  const handleLoginInput = useCallback((e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!loginInput.Username || !loginInput.Password)
      return toast.error("Both Username and password are required");

    const isUser = csvData.find(
      (user) =>
        user.Username === loginInput.Username &&
        user.Password === loginInput.Password
    );
    // console.log(isUser);
    if (!isUser) return toast.error("Invalid credentials");
    login(isUser);
    toast.success("Login successful!");
    navigate("/");
  };
  // console.log(csvData);

  if (isLoading) return <Loader />;

  if (csvError) {
    return (
      <div className="error-message">
        <p>Error loading user data, please try again later.</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <div className="logo"></div>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-info">
            <h2>Welcome back !</h2>
            <p>Enter your username and password to continue using app</p>
          </div>

          <div className="form-section">
            <div className="form-group">
              <button className="input-icon">
                <FaRegUser />
              </button>
              <input
                type="text"
                placeholder="Enter username"
                value={loginInput.Username}
                name="Username"
                onChange={handleLoginInput}
                required
              />
            </div>
            <div className="form-group">
              <button className="input-icon">
                <MdLockOutline />
              </button>

              <input
                type="password"
                placeholder="Enter password"
                value={loginInput.Password}
                name="Password"
                onChange={handleLoginInput}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
