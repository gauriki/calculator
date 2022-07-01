import { useState } from "react";

function App() {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [result, setResult] = useState();

  const [sign, setSign] = useState();

  return (
    <div>
      <div className="flex">
        <input
          type="number"
          placeholder="enter first number"
          value={firstNum}
          onChange={(e) => {
            setFirstNum(Number(e.target.value));
          }}
        />
        <p>{sign}</p>
        <input
          type="number"
          placeholder="enter second number"
          value={secondNum}
          onChange={(e) => {
            setSecondNum(Number(e.target.value));
          }}
        />

        <p>Result = {result}</p>
      </div>
      <div className="pad">
        <button
          onClick={() => {
            setResult(firstNum + secondNum);
            setSign("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setResult(firstNum - secondNum);
            setSign("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setResult(firstNum * secondNum);
            setSign("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            setResult(firstNum / secondNum);
            setSign("/");
          }}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
