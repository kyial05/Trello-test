import React from "react";
import "./App.css";
import { Juice } from "./Components/Main";
import { Dat } from "./Components/Main/Card";


export const App = () => {
  return (
    <div className="App">
      <div className="Container">
        
      {Dat.map((el, id) => {
        return <Juice el={el} id={id} />;
      })}
    </div></div>
  );
};