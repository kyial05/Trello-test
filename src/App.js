import React, { useState } from "react";
import "./App.css";
import { Juice } from "./Components/Main";
import { Dat } from "./Components/Main/Card";
// import { useCart } from "react-use-cart";

export const App = ({ el }) => {
  // const {
  //   isEmpty,
  //   totalUniqueItems,
  //   items,
  //   totalItems,
  //   cartTotal,
  //   updateItemQuantity,
  //   removeItem,
  //   emptyCart,
  // } = useCart();
  const [result, setResult] = useState();
  const [count, setCount] = useState(1);
  const [summ, setSumm] = useState();

  const Plus = () => {
    setResult(el.price * (count + 1));
    setCount(parseInt(count) + 1);
    // setSumm();
  };

  const Minus = () => {
    if (count > 0) {
      setResult(el.price * (count - 1));
      setCount(parseInt(count) - 1);
    }
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="headPart">
          <p>Shopping chart</p>
          <button>Remove all</button>
        </div>
        {Dat.map((el, id) => {
          return <Juice el={el} id={id} />;
        })}
        <div className="order">
          <div className="orderTop">
            <div className="orderLeft">
              <p>Sub-Total</p>
              <span>{count} items</span>
            </div>
            <p className="generalPrice">$ {summ}</p>
          </div>
          <button className="checkout" onClick={() => alert("order accepted")}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
