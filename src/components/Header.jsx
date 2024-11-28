import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <header>
      <div className="wrapper">
        <div className="logo-container">
          <h2>THRD CLOTH</h2>
        </div>

        {user && (
          <div className="user-info">

            Welcome, {user.Username} 
            <button type="button" className="btn-logout" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
