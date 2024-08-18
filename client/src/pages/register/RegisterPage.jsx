import "./RegisterPage.css";

import { useContext, useState } from "react";

import apiRequester from "../../utils/apiRequester";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);

    const credentials = { username, email, password };

    registerUser(credentials);
  };

  const registerUser = async (userCredentials) => {
    try {
      const result = await apiRequester(
        "http://localhost:3030/users/register",
        "POST",
        userCredentials
      );
      register(result);
      navigate("/");

      // console.log(result);
    } catch (error) {
      console.error("Login failed:", error);
      // setError("Registration failed. Please try again.");
      setError("User with such email already exist.");
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
        <p>
          If you do not have registration you can do it{" "}
          <Link className="linkG" to="/login">
            here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
