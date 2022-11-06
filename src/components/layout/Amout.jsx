const Amout = ({ title, value }) => {
  const containerStyles = "flex justify-between items-center";
  const titleStyles = "text-lg text-project-neutral-100";
  const subtitleStyles = "text-sm text-project-cyan-100 opacity-75";
  const valueStyles = "text-3xl text-project-cyan-200";

  return (
    <div className={containerStyles}>
      <div>
        <h3 className={titleStyles}>{title}</h3>
        <p className={subtitleStyles}>/ person</p>
      </div>
      <h2 className={valueStyles}>{`$${value}`}</h2>
    </div>
  );
};

export default Amout;
