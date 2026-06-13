import { useState, useEffect } from "react";

export default function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ borderColor: isValid ? "#ccc" : "red" }}
        placeholder="Type at least 3 characters..."
      />
      {!isValid && <p style={{ color: "red" }}>{errorMessage}</p>}
      {isValid && value.length > 0 && <p style={{ color: "green" }}>✓ Valid</p>}
    </div>
  );
}
