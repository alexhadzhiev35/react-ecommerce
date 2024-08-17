import "./Header.css";

import { Link, NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {" "}
            Contact Us
          </NavLink>
        </li>
        <li>
          <Link to="/">
            {" "}
            <ShoppingBagIcon className="icon" />
          </Link>
        </li>
      </ul>

      <ul className="actions">
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/register"> Register</Link>
        </li>
        <li>
          <Link to="/logout"> Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
