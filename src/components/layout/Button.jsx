import { useEffect } from "react";
import { useState } from "react";

const Button = ({ children, value, handlePercentage, percentage }) => {
  const handleValue = () => {
    handlePercentage(value);
  };

  useEffect(() => {}, [percentage]);

  return (
    <button
      className={`py-2 rounded-[5px] font-bold text-2xl ${
        percentage === value
          ? "bg-project-cyan-200 text-project-cyan-300"
          : "bg-project-cyan-300 text-project-neutral-100"
      }`}
      onClick={handleValue}
    >
      {children}
    </button>
  );
};

export default Button;
