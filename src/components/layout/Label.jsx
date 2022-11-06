const Label = ({ id, children }) => {
  const labelStyles = "block mb-2 text-base text-project-neutral-400";
  return (
    <label className={labelStyles} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
