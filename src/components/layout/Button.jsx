const Button = ({ children }) => {
  return (
    <button
      className={`py-2 rounded-[5px] font-bold text-2xl bg-project-cyan-300 text-project-neutral-100`}
      onClick={() => buttonClick()}
    >
      {children}
    </button>
  );
};

export default Button;
