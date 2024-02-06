"use client";

import { useState } from "react";
import Button from "@/components/button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 10);
  };

  const handleDecrement = () => {
    setCount(count - 10);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">カウンター</h1>
      <p className="text-2xl mb-4">{count}</p>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={reset}>reset</Button>
    </div>
  );
};

export default Counter;
