import { useEffect, useState } from "react";
import css from "../styles/Modal.css";
import uniqid from "uniqid";
const Modal = ({
  setModal,
  modal,
  cartItems,
  setCartItems,
  items,
  setItems,
}) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (cartItems.length == 0) {
      setTotal(0);
    } else {
      let temp = cartItems
        .map((x) => x.price * x.count)
        .reduce((prev, curr) => prev + curr);
      setTotal(temp);
    }
  }, [setTotal, cartItems]);

  const addCount = (index) => {
    const new_arr = cartItems;
    new_arr[index].count++;
    let temp = cartItems
      .map((x) => x.price)
      .reduce((prev, curr) => prev + curr);
    setTotal(temp);
    return new_arr;
  };

  const subCount = (index) => {
    const new_arr = cartItems;
    if (new_arr[index].count >= 2) {
      new_arr[index].count--;
      let temp = cartItems
        .map((x) => x.price)
        .reduce((prev, curr) => prev + curr);
      setTotal(temp);
    } else {
      new_arr.splice(index, 1);
    }

    return new_arr;
  };
  return (
    <div className="modal" style={css}>
      <div className="cart">
        <div className="carttitle">Your Cart</div>
        <div className="itemholder">
          {cartItems.map((item) => {
            return (
              <div key={uniqid()} className="items">
                <img src={item.image}></img>
                <div className="info">
                  <div className="itemtitle">{item.title}</div>
                  <div>${(item.price * item.count).toFixed(2)}</div>
                  <div className="count">
                    <button
                      onClick={() => {
                        const temp = subCount(cartItems.indexOf(item));
                        setCartItems([...temp]);
                      }}
                    >
                      -
                    </button>
                    <div>{item.count}</div>
                    <button
                      onClick={() => {
                        const temp = addCount(cartItems.indexOf(item));
                        setCartItems([...temp]);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">Total: ${total.toFixed(2)}</div>
        <div className="buttons">
          <button id="checkout">Checkout</button>
          <button id="close" onClick={() => setModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
