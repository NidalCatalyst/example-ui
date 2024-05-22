import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
    ></button>
  );
};

export default Button;
