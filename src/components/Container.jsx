import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Form from "./Form";
import Output from "./Output";

const Container = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const billInput = useRef(null);
  const peopleInput = useRef(null);
  const percentageInput = useRef(null);
  const [redRing, setRedRing] = useState();

  const handleReset = () => {
    setBill(0);
    setPeople(0);
    setPercentage(0);
    billInput.current.value = 0;
    peopleInput.current.value = 0;
    percentageInput.current.value = 0;
  };

  useEffect(() => {
    if (people == 0) {
      console.log("Não pode ser zero");
      setTipAmount(0);
      setTotalAmount(0);
      setRedRing(true);
      return;
    }
    setTipAmount(((bill * percentage) / people).toFixed(2));
    setTotalAmount(((bill / people) * (percentage + 1)).toFixed(2));
    setRedRing(false);
  }, [bill, people, percentage]);

  return (
    <div className="p-5 bg-project-neutral-100 rounded-xl flex flex-col gap-10">
      <Form
        handleBill={setBill}
        handlePeople={setPeople}
        handlePercentage={setPercentage}
        percentage={percentage}
        billInput={billInput}
        peopleInput={peopleInput}
        percentageInput={percentageInput}
        redRingState={redRing}
      />
      <Output
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Container;
