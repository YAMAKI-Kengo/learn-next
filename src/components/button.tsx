import React, { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<"button">, "className">;

const Button: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 mb-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
    ></button>
  );
};

export default Button;
