import "./Header.css";

import {
  ArrowTrendingUpIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <ArrowTrendingUpIcon className="logoIcon" />
        <p className="logoName">TrendyTech</p>
      </div>

      <ul className="links">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#"> Products</a>
        </li>
        <li>
          <a href="#"> About</a>
        </li>
        <li>
          <a href="#"> Contact Us</a>
        </li>
        <li>
          <a href="#">
            {" "}
            <ShoppingBagIcon className="icon" />
          </a>
        </li>
      </ul>

      <ul className="actions">
        <li>
          <a href="#"> Login</a>
        </li>
        <li>
          <a href="#"> Register</a>
        </li>
        <li>
          <a href="#"> Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
