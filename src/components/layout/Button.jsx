import { useEffect } from "react";

const Button = ({
  children,
  value,
  handlePercentage,
  percentage,
  handleInput,
}) => {
  const handleValue = () => {
    handlePercentage(value);
    handleInput();
  };

  useEffect(() => {}, [percentage]);

  const btnEnableStyles = "bg-project-cyan-200 text-project-cyan-300";
  const btnDisableStyles = "bg-project-cyan-300 text-project-neutral-100";

  const buttonStyles = `py-2 rounded-[5px] font-bold text-2xl md:text-xl  ${
    percentage === value ? btnEnableStyles : btnDisableStyles
  }`;

  return (
    <button className={buttonStyles} onClick={handleValue}>
      {children}
    </button>
  );
};

export default Button;
