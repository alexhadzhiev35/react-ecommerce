import "./LoginPage.css";

import { useContext, useState } from "react";
import apiRequester from "../../utils/apiRequester";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = { email, password };

    loginUser(credentials);
    // console.log("Email:", email);
    // console.log("Password:", password);
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
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
