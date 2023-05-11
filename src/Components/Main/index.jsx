import React, { useState } from "react";

import "./style.css";

export const Juice = ({ el }) => {
  const [result, setResult] = useState(el.price);
  const [count, setCount] = useState(0);
  const {value,setValue} = useState([])
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
  const Delete =()=>{
setCount(0)
  }

  return (
    <div className="content">
      <img src={el.img} alt="img" />
      <div className="Card">
      <div className="Name">
      <h1>{el.des}</h1>
      <h3>{el.vol}</h3>
      <img src={el.icon} alt="" /></div>
      <div className="Counter">
       <button onClick={Plus}>+</button>
        <h2 className="count">{count}</h2>
        <button onClick={Minus}>-</button>
        </div>
      <div className="pricePlace">
        <h2> {el.price} </h2>
        <a href="" className="Save" type="text"> Save for later</a>
      <a href="" className="Remove" onClick={Delete} >Remove</a>
      
      </div></div>
      
    </div>
  );
};
