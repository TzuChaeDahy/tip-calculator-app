import Label from "./Label";

const NumberInput = ({ id, label, icon, handleValue, refState }) => {
  return (
    <div>
      <Label id={id}>{label}</Label>
      <div className="flex items-center pl-4 bg-project-neutral-200 rounded-sm overflow-hidden">
        <img src={icon} alt="No Value" />
        <input
          id={id}
          type="number"
          className="bg-transparent outline-none text-right pr-4 py-2 h-full text-project-cyan-300 w-full"
          min="0"
          onChange={(e) => {
            handleValue(e.target.value);
          }}
          ref={refState}
        />
      </div>
    </div>
  );
};

export default NumberInput;
