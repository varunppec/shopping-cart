import { Link } from "react-router-dom";

const HomePage = () => {
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
