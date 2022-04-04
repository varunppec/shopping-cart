import { useEffect, useState } from "react";
import uniqid from "uniqid";
const ShopPage = (props) => {
  const {items, setItems} = props;
  const {cartItems, setCartItems} = props;
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
      "https://fakestoreapi.com/products/category/men's clothing?limit=3"
    );
    const list = await data.json();
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
      setCartItems([...cartItems, { id: id, count: 1 , price: price, title: title, image: image}]);
    }
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={uniqid()}>
            <img src={item.image} height="100px" alt={item.id}></img>
            <div>{item.title}</div>
            <div>${item.price}</div>
            <button
              onClick={() => {
                addToCart(item.id, item.price, item.title, item.image);
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ShopPage;
