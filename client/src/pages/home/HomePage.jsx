import "./HomePage.css";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero">
      <div className="heading">
        <h1>High-tech products </h1>
        <p>with the best price on the market</p>
      </div>

      <Link to="/products" className="shopBtn">
        Shop now
      </Link>
    </div>
  );
};

export default HomePage;
