import React from "react";
import "./app.css";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="App">
      <h1>
        <Calculator />
      </h1>
    </div>
  );
};

export default App;
