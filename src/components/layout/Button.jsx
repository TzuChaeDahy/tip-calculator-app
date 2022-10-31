const Button = ({ children, value, handlePercentage }) => {
  const handleValue = () => {
    handlePercentage(value);
  };
  return (
    <button
      className={`py-2 rounded-[5px] font-bold text-2xl bg-project-cyan-300 text-project-neutral-100`}
      onClick={handleValue}
    >
      {children}
    </button>
  );
};

export default Button;
