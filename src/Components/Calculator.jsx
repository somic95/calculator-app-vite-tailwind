import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("0");

  const display = (value) => {
    if (inputValue.toString().charAt(0) === "0") {
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  };

  const reset = () => {
    setInputValue("0");
  };

  const calculate = () => {
    let result = eval(inputValue);
    setInputValue(result);
  };

  return (
    <>
      <div className="calculator font-Mooli bg-black w-auto h-auto md:max-w-full max-w-[95%] rounded-2xl p-3 shadow-2xl">
        <div
          className="calculator-display bg-black text-white flex 
                            items-center justify-end rounded-t-[10px]"
        >
          <h1 className="text-[40px] overflow-hidden font-black">
            {inputValue}
          </h1>
        </div>
        <div className="calculator-button grid grid-cols-4 gap-[20px] p-2.5">
          <button className="operator" onClick={() => display("+")}>
            +
          </button>
          <button className="operator" onClick={() => display("-")}>
            -
          </button>
          <button className="operator" onClick={() => display("*")}>
            x
          </button>
          <button className="operator" onClick={() => display("/")}>
            ÷
          </button>
          <button className="number" onClick={() => display("7")}>
            7
          </button>
          <button className="number" onClick={() => display("8")}>
            8
          </button>
          <button className="number" onClick={() => display("9")}>
            9
          </button>
          <button className="number" onClick={() => display("4")}>
            4
          </button>
          <button className="number" onClick={() => display("5")}>
            5
          </button>
          <button className="number" onClick={() => display("6")}>
            6
          </button>
          <button className="number" onClick={() => display("1")}>
            1
          </button>
          <button className="number" onClick={() => display("2")}>
            2
          </button>
          <button className="number" onClick={() => display("3")}>
            3
          </button>
          <button className="number" onClick={() => display(".")}>
            .
          </button>
          <button className="number" onClick={() => display("0")}>
            0
          </button>
          <button className="clear-btn bg-orange-600" onClick={reset}>
            C
          </button>
          <button
            className="equal operator col-span-0 col-start-[-2] row-start-2 row-span-4"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
