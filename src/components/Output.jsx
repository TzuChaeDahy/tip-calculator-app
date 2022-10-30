import Amount from "./layout/Amout";

const Output = () => {
  return (
    <div className="flex flex-col gap-6 px-5 py-6 rounded-xl bg-project-cyan-300">
      <Amount title="Tip Amount" value="4,90" />
      <Amount title="Total" value="10,50" />
      <button className="uppercase bg-project-cyan-200 w-full py-2 rounded-md text-project-cyan-300">
        reset
      </button>
    </div>
  );
};

export default Output;
