import NumberInput from "./layout/NumberInput";
import TipLayout from "./TipLayout";

import Dollar from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";

const Form = ({
  handlePeople,
  handleBill,
  handlePercentage,
  percentage,
  percentageInput,
  billInput,
  peopleInput,
  redRingState,
}) => {
  return (
    <div className="flex flex-col gap-8 px-4 py-2">
      <NumberInput
        id="bill"
        label="Bill"
        icon={Dollar}
        handleValue={handleBill}
        refState={billInput}
      />
      <TipLayout
        handlePercentage={handlePercentage}
        percentage={percentage}
        percentageInput={percentageInput}
      />
      <NumberInput
        id="people"
        label="Number of People"
        icon={Person}
        handleValue={handlePeople}
        refState={peopleInput}
        redRingState={redRingState}
      />
    </div>
  );
};

export default Form;
