import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import css from "../styles/Header.css";
import image from "../cart-shopping-solid.svg";
const Header = ({ total, setTotal, setModal, modal }) => {
  const navigate = useNavigate();
  const redirect = () => {
    const path = "/";
    navigate(path);
  };
  return (
    <nav style={css}>
      <div className="head">
        <h1
          onClick={() => {
            redirect();
          }}
        >
          Objectify
        </h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div
          className="cartcontainer"
          onClick={() => {
            setModal(true);
          }}
        >
          <button className="cartholder">
            <img src={image}></img>
          </button>
          <div className="carttotal">{total}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
