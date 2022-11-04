import Label from "./Label";

const NumberInput = ({
  id,
  label,
  icon,
  handleValue,
  refState,
  redRingState,
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <Label id={id}>{label}</Label>
        {redRingState && (
          <span className="text-red-500 text-xs md:text-sm flex items-center">
            Can't Be Zero
          </span>
        )}
      </div>
      <div
        className={`flex items-center pl-4 bg-project-neutral-200 rounded-sm overflow-hidden  focus-within:ring-2 focus-within:ring-project-cyan-200 ${
          redRingState ? "ring-2 ring-red-500" : ""
        }`}
      >
        <img src={icon} alt="No Value" />
        <input
          id={id}
          type="number"
          className="bg-transparent outline-none text-right pr-4 py-2 h-full text-project-cyan-300 w-full"
          min="0"
          onChange={(e) => {
            handleValue(e.target.value);
          }}
          placeholder="0"
          ref={refState}
        />
      </div>
    </div>
  );
};

export default NumberInput;
