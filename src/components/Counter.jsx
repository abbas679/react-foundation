import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Tahir");

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>{name}</p>
      <button onClick={() => setName("Taheer")}>Change Name</button>
      <button onClick={() => setName("Tahir")}>Reset Name</button>
    </>
  );
}

export default Counter;
