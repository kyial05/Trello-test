import React, { useState } from "react";
import "./style.css";
import { useCart } from "react-use-cart";

export const Juice = ({ el }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
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
    }
  };

  return (
    <div className="content">
      <img src={el.img} alt="img" />
      <div className="desPart">
        <p className="des">{el.des}</p>
        <p className="vol">{el.vol}</p>
        <img src={el.mark} alt="mark" className="mark" />
      </div>
      <div className="countPart">
        <button onClick={Plus}>+</button>
        <p className="counter">{count}</p>
        <button onClick={Minus}>-</button>
      </div>
      <div className="pricePart">
        <p className="price">$ {el.price}</p>
        <button className="save">Save for later</button>
        <button
          className="remove"
          onClick={(e) => {
            e.currentTarget.parentNode.parentNode.remove();
          }}
        >
          Remove
        </button>
      </div>
      <div className="sumPart">
        <p>sum: {result} $</p>
        <p>general: {summ}</p>
      </div>
    </div>
  );
};
