import React, { useState } from "react";
import "./App.css";
import { Juice } from "./Components/Main";
import { Dat } from "./Components/Main/Card";

export const App = ({ el }) => {
  const [result, setResult] = useState();
  const [count, setCount] = useState(1);
  const [summ, setSumm] = useState(0);

  const Plus = () => {
    setResult(el.price * (count + 1));
    setCount(parseInt(count) + 1);
    setSumm();
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
          <button >Remove all</button>
        </div>
        {Dat.map((el, id) => {
          return <Juice el={el} id={id} />;
        })}
        <div className="order">
          <div className="orderTop">
            <div className="orderLeft">
              <p>Sub-Total</p>
              <span onChange={Plus}>{countG} items</span>
            </div>
            <p className="generalPrice">$ {summ}</p>
          </div>
          <buttom className="checkout" >Checkout</buttom>
        </div>
      </div>
    </div>
  );
};
