import React, { useState } from "react";
import "./App.css";
import { Juice } from "./Components/Main";
import { Dat } from "./Components/Main/Card";


export const App = () => {
  const [value,setValue]=useState('')

const addtoOrder =(el,id)=>{
  setValue({})
}
  return (
    <div className="App">
      <div className="header">
       <div className="Container">
        <h2  className="text">Shopping Cart</h2>
        <a href=""  >Remolve all</a>
        </div>
      {Dat.map((el, id) => {
        return <Juice el={el} id={id}  />;
      })}
      <hr/>
      <div className="Sum">
        <h2>Sub-Total <br/>items</h2>
      <h1>{}</h1>
      
      <button className="Checkout">Checkout</button>
      </div>
    </div> 
    </div>
  );
  
};