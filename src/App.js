import React, { useState } from "react";

const App = () => {

  const [result, setResult] = useState("");
  const operators = [".", "/", "*", "+", "-"];

  const createNumbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => getValue(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const getValue = par => {

    if(operators.includes(par) && result === "") return;
    if(operators.includes(par) && operators.includes(result.slice(-1))) return;

    const newResult = result + par
    setResult(newResult);
  }

  const deleteValue = () => {

    if(result === "") return;

    const newValue = result.slice(0, -1);
    setResult(newValue)
  }

  const doTheMath = () => {

    if (result === "" || operators.includes(result.slice(-1))) return;

    const calculateValue = Function(`return ${result}`)();
    setResult(calculateValue);
  }

  const clearAll = () => {
    const clear = "";
    setResult(clear);
  }

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="display">
        <input disabled type="text" value={result || "0"} />
      </div>
      <section>
        <div className="clear">
          <button onClick={clearAll}>Clear All</button>
        </div>
        <div>
          <button onClick={deleteValue}>Del</button>
          <button onClick={() => getValue(".")}>.</button>
          <button onClick={() => getValue("/")}>/</button>
          <button onClick={() => getValue("*")}>*</button>
          <button onClick={() => getValue("+")}>+</button>
          <button onClick={() => getValue("-")}>-</button>
        </div>
        <div>{createNumbers()}</div>
        <div>
          <button onClick={() => getValue("0")}>0</button>
          <button onClick={() => getValue("00")}>00</button>
          <button onClick={doTheMath}>=</button>
        </div>
      </section>
    </div>
  );
}

export default App;
