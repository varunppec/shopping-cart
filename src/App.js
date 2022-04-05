import Header from "./components/Header";
import RouteSwitch from "./components/RouteSwitch";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import css from "./styles/App.css";
function App() {
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App" style={css}>
      <BrowserRouter basename="shopping-cart">
        <Header
          total={total}
          setTotal={setTotal}
          setModal={setModal}
          modal={modal}
        />
        {modal ? (
          <Modal
            setModal={setModal}
            modal={modal}
            cartItems={cartItems}
            setCartItems={setCartItems}
            items={items}
            setItems={setItems}
          />
        ) : (
          <div />
        )}

        <Routes>
          <Route
            path="/shop"
            element={
              <ShopPage
                total={total}
                setTotal={setTotal}
                setModal={setModal}
                cartItems={cartItems}
                setCartItems={setCartItems}
                items={items}
                setItems={setItems}
              />
            }
          />

          <Route
            path="/"
            element={<HomePage setModal={setModal} setTotal={setTotal} cartItems={cartItems}  />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
