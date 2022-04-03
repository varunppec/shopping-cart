import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import css from "../styles/Header.css";
import image from "../cart-shopping-solid.svg";
const Header = ({ total, setTotal, setModal, modal }) => {
  

  return (
    <nav style={css}>
      <div className="head">
        <h1>Objectify</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div className="cartcontainer">
          <button
            className="cartholder"
            onClick={() => {
              setModal(true);
            }}
          >
            <img src={image}></img>
          </button>
          <div className="carttotal">{total}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
