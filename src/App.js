import React from "react";
import "./App.css";
import { Juice } from "./Components/Main";
import { Dat } from "./Components/Main/Card";

export const App = () => {
  return (
    <div className="App">
      <div>
        <div className="Container">
          <div className="headPart">
            <p>Shopping chart</p>
            <button>Remove all</button>
          </div>
          {Dat.map((el, id) => {
            return <Juice el={el} id={id} />;
          })}
        </div>
      </div>
    </div>
  );
};
