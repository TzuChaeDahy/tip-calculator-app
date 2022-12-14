import Label from "./layout/Label";
import Button from "./layout/Button";

const TipLayout = ({ handlePercentage, percentage, percentageInput }) => {
  const percentages = [
    { value: 0.05, perc: "5%" },
    { value: 0.1, perc: "10%" },
    { value: 0.15, perc: "15%" },
    { value: 0.25, perc: "25%" },
    { value: 0.5, perc: "50%" },
  ];

  const handleInput = () => {
    percentageInput.current.value = "";
  };

  const createButtons = percentages.map((btn, index) => {
    return (
      <Button
        key={index}
        value={btn.value}
        handlePercentage={handlePercentage}
        percentage={percentage}
        handleInput={handleInput}
      >
        {btn.perc}
      </Button>
    );
  });

  const inputStyles =
    "bg-project-neutral-200 text-right px-4 py-2 rounded-sm outline-none focus-within:ring-2 focus-within:ring-project-cyan-200";
  const gridContainer = "grid grid-cols-2 gap-4";

  return (
    <div>
      <Label>Select Tip %</Label>
      <div className={gridContainer}>
        {createButtons}
        <input
          type="number"
          className={inputStyles}
          placeholder="Custom"
          onChange={(e) => handlePercentage(e.target.value / 100)}
          ref={percentageInput}
        />
      </div>
    </div>
  );
};

export default TipLayout;
