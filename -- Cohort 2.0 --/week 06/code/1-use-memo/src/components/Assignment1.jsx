import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [isflag, setIsFlag] = useState(false);

  const expensiveValue = useMemo(() => {
    console.log("executed");
    if (input < 0) throw new Error("n must be >= 0");
    let result = 1;
    for (let i = 2; i <= input; i++) {
      result *= i;
    }
    return result;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
