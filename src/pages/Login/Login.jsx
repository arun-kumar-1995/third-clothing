import "./Login.css";
import { FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
const Login = () => {
  return (
    <div className="login-container">
      <div className="form-wrapper">
        <div className="logo"></div>
        <form action="">
          <div className="form-info">
            <h2>Welcome back !</h2>
            <p>Enter your username and password to continue using app</p>
          </div>

          <div className="form-section">
            <div className="form-group">
              <button className="input-icon">
                <FaRegUser />
              </button>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="form-group">
              <button className="input-icon">
                <MdLockOutline />
              </button>

              <input type="password" placeholder="Enter password" />
            </div>
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
