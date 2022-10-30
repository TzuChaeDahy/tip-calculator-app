const Amout = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg text-project-neutral-100">{title}</h3>
        <p className="text-sm text-project-cyan-100 opacity-75">/ person</p>
      </div>
      <h2 className="text-3xl text-project-cyan-200">{`$${value}`}</h2>
    </div>
  );
};

export default Amout;
