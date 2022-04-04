import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = ({setModal, setTotal, cartItems}) => {
  useEffect(() => {
    let sum = cartItems
      .map((item) => item.count)
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(sum);
  },[cartItems, setTotal]);
  return (
    <div>
      <div className="review">BEST DESIGNS FOR EVERYONE</div>
      <div className="motto">We are more than fashion</div>
      <Link to="/shop">
        <button>Shop</button>
      </Link>
    </div>
  );
};

export default HomePage;
