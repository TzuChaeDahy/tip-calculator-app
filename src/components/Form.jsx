import NumberInput from "./layout/NumberInput";
import TipLayout from "./TipLayout";

import Dollar from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";

const Form = ({
  handlePeople,
  handleBill,
  handlePercentage,
  billInput,
  peopleInput,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <NumberInput
        id="bill"
        label="Bill"
        icon={Dollar}
        handleValue={handleBill}
        refState={billInput}
      />
      <TipLayout handlePercentage={handlePercentage} />
      <NumberInput
        id="people"
        label="Number of People"
        icon={Person}
        handleValue={handlePeople}
        refState={peopleInput}
      />
    </div>
  );
};

export default Form;
