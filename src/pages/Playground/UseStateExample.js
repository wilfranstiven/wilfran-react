import { useState } from "react";

export default function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador con useState: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}