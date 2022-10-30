const Label = ({ id, children }) => {
  return (
    <label
      className="block mb-2 text-base text-project-neutral-400"
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export default Label;
