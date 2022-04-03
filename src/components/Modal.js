import { useEffect } from "react";
import css from "../styles/Modal.css";
const Modal = ({setModal, modal}) => {
    
   
  return (
    <div className="modal" style={css}>
      <div className="cart">
        <div className="carttitle">Your Cart</div>
        <div className="buttons">
          <button id="checkout">Checkout</button>
          <button id="close" onClick={() => (setModal(false))}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
