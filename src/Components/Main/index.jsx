import React, { useState } from "react";
// import { Dat } from "./Card";
import "./style.css";

export const Juice = ({ el }) => {
  const [result, setResult] = useState(el.price);
  const [count, setCount] = useState(1);
  const [summ, setSumm] = useState();

  const Plus = () => {
    setResult(el.price * (count + 1));
    setCount(parseInt(count) + 1);
    setSumm();
  };

  const Minus = () => {
    if (count > 0) {
      setResult(el.price * (count - 1));
      setCount(parseInt(count) - 1);
      setSumm();
    }
  };

  return (
    <div className="content">
      <img src={el.img} alt="img" />
      <div className="Card">
      <div className="Name">
      <h1>{el.des}</h1>
      <h2>price: {el.price} $</h2>
      <div className="pricePlace">
        <button onClick={Plus}>+</button>
        <h2 className="counter">{count}</h2>
        <button onClick={Minus}>-</button>
      </div>
      <h2>sum: {result} $</h2>
      <h1>general: {summ}</h1>
    </div>
  );
};
