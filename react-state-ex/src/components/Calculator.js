// import { useState } from "react";
// import { BoilingWater } from "./Boiling.Water";
import { useState } from "react";
import { tryConvert } from "../Utils";
import TemperatureInput from "./TemperatureInput";
import { toCelsius } from "../Utils";
import { toFahrenheit } from "../Utils";
import { BoilingWater } from "./Boiling.Water";

const Calculator = (props) => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const onCelsiusChange = (t) => {
    setTemperature(t);
    setScale("c");
  };
  const onFahrenheitChange = (t) => {
    setTemperature(t);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={onCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={onFahrenheitChange}
      />
      <BoilingWater celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calculator;
