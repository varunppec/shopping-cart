import { useEffect, useState } from "react";
import uniqid from "uniqid";
import style from "../styles/ShopPage.css";
const ShopPage = (props) => {
  const { items, setItems } = props;
  const { cartItems, setCartItems } = props;
  const { total, setTotal } = props;

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    let sum = cartItems
      .map((item) => item.count)
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(sum);
  });

  const fetchItems = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    const list = await data.json();
    console.log(list);
    setItems(list);
  };

  const addToCart = (id, price, title, image) => {
    let check = 1;
    for (let item of cartItems) {
      if (item.id === id) {
        const index = cartItems.indexOf(item);
        let arr = [...cartItems];
        console.log(arr[index], arr[index].count);
        arr[index].count++;
        setCartItems(arr);
        check = 0;
      }
    }
    if (check) {
      setCartItems([
        ...cartItems,
        { id: id, count: 1, price: price, title: title, image: image },
      ]);
    }
  };

  return (
    <div style={style} className="cardholder">
      {items.map((item) => {
        return (
          <div key={uniqid()} className="card">
            <img src={item.image} alt={item.id}></img>
            <div className="itemshoptitle">{item.title}</div>
            <div className="shopdetailsholder">
              <div className="iteminfo">
                <div className="shopprice">${item.price}</div>
                <button
                  onClick={() => {
                    addToCart(item.id, item.price, item.title, item.image);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ShopPage;
