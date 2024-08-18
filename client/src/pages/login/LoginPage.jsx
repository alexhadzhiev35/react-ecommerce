import "./LoginPage.css";

import { useContext, useState } from "react";
import apiRequester from "../../utils/apiRequester";
import AuthContext from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    const credentials = { email, password };

    loginUser(credentials);
  };

  const loginUser = async (userCredentials) => {
    try {
      const result = await apiRequester(
        "http://localhost:3030/users/login",
        "POST",
        userCredentials
      );
      login(result);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="something@abv.bg"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="******"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <p>
          If you do not have registration you can do it{" "}
          <Link className="link" to="/register">
            here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
