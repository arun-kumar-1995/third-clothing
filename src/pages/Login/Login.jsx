import "./Login.css";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import csvFile from "../../data/users.csv?raw";
import { useCsvLoader } from "../../hooks/useCsvLoader";

const Login = () => {
  const [csvData, csvError] = useCsvLoader(csvFile);
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });

  const handleLoginInput = (e) => {
    const {name, value} = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) =>{
    e.preventDefault();
    console.log(loginInput);

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
                value={loginInput.username}
                name="username"
                onChange={handleLoginInput}
              />
            </div>
            <div className="form-group">
              <button className="input-icon">
                <MdLockOutline />
              </button>

              <input
                type="password"
                placeholder="Enter password"
                value={loginInput.password}
                name="password"
                onChange={handleLoginInput}
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
