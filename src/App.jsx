import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>The count is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +1
      </button>
    </>
  );
}
