import React, { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<"input">, "className">;

const Input: React.FC<Props> = (props) => {
  return (
    <input {...props}
      className="rounded-full bg-violet-100 text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Enter anything..."
    />
  );
};

export default Input;
