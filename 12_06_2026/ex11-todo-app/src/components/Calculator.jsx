import { useState } from "react";

function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCompute = () => {
    const a = parseFloat(first);
    const b = parseFloat(second);

    if (isNaN(a) || isNaN(b)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    setError("");

    if (operator === "/" && b === 0) {
      setError("Cannot divide by zero");
      setResult(null);
      return;
    }

    let res;
    if (operator === "+") res = a + b;
    else if (operator === "-") res = a - b;
    else if (operator === "*") res = a * b;
    else if (operator === "/") res = a / b;

    setResult(res);
  };

  return (
    <div className="card">
      <h2 className="card-title">🧮 Calculator</h2>

      <div className="form-group">
        <label className="form-label">First Number</label>
        <input
          type="number"
          className="text-input"
          placeholder="Enter first number"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Operator</label>
        <select
          className="select-input"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Second Number</label>
        <input
          type="number"
          className="text-input"
          placeholder="Enter second number"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
      </div>

      <button className="btn btn-primary btn-full" onClick={handleCompute}>
        Compute
      </button>

      {error && <p className="error-msg">{error}</p>}
      {result !== null && !error && (
        <div className="result-box">
          <span className="result-label">Result:</span>
          <span className="result-value">{result}</span>
        </div>
      )}
    </div>
  );
}

export default Calculator;
