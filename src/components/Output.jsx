import Amount from "./layout/Amout";

const Output = ({ tipAmount, totalAmount, handleReset }) => {
  return (
    <div className="flex flex-col gap-6 px-5 py-6 rounded-xl bg-project-cyan-300">
      <Amount title="Tip Amount" value={tipAmount} />
      <Amount title="Total" value={totalAmount} />
      <button
        className="uppercase bg-project-cyan-200 w-full py-2 rounded-md text-project-cyan-300"
        onClick={handleReset}
      >
        reset
      </button>
    </div>
  );
};

export default Output;
