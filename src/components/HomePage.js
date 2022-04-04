import { useEffect } from "react";
import { Link } from "react-router-dom";
import css from "../styles/HomePage.css";

const HomePage = ({ setModal, setTotal, cartItems }) => {
  useEffect(() => {
    let sum = cartItems
      .map((item) => item.count)
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(sum);
  }, [cartItems, setTotal]);
  return (
    <div className="holder" style={css}>
      <div className="homemodal">
        <div className="review">BEST DESIGNS FOR EVERYONE</div>
        <div className="motto">We are more than fashion</div>
        <Link to="/shop">
          <button id="shopnow">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
