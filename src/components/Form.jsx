import NumberInput from "./layout/NumberInput";
import TipLayout from "./TipLayout";

import Dollar from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";

const Form = () => {
  return (
    <div className="flex flex-col gap-8">
      <NumberInput id="bill" label="Bill" icon={Dollar} />
      <TipLayout />
      <NumberInput id="people" label="Number of People" icon={Person} />
    </div>
  );
};

export default Form;
