import React, { useState } from "react";

import "./style.css";

export const Juice = ({ el }) => {
  const [result, setResult] = useState(el.price);
  const [count, setCount] = useState(1);

  const Plus = () => {
    setResult(el.price * (count + 1));
    setCount(parseInt(count) + 1);
  };

  const Minus = () => {
    if (count > 0) {
      setResult(el.price * (count - 1));
      setCount(parseInt(count) - 1);
    }
  };

  return (
    <div className="content">
      <img src={el.img} alt="img" />
      <div className="Card">
      <div className="Name">
      <h1>{el.des}</h1>
      <h3>{el.vol}</h3></div>
      <div className="Counter">
       <button onClick={Plus}>+</button>
        <h2 className="counter">{count}</h2>
        <button onClick={Minus}>-</button>
        </div>
      <div className="pricePlace">
        <h2>price: {el.price} $</h2>
       
        <button className="Save" type="text"> Save for later</button>
      <button className="Remove">Remove</button>
      </div></div>
      
    </div>
  );
};
