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

  const handleReset = () => {
    setBill(0);
    setPeople(0);
    billInput.current.value = 0;
    peopleInput.current.value = 0;
  };

  useEffect(() => {
    if (people == 0) {
      console.log("Não pode ser zero");
      setTipAmount(0);
      setTotalAmount(0);
      //Sistema de Borda Vermelha
      return;
    }
    setTipAmount(((bill * percentage) / people).toFixed(2));
    setTotalAmount(((bill / people) * (percentage + 1)).toFixed(2));
    console.log(billInput.current.value);
    console.log(peopleInput.current.value);
  }, [bill, people, percentage]);

  return (
    <div className="p-5 bg-project-neutral-100 rounded-xl flex flex-col gap-10">
      <Form
        handleBill={setBill}
        handlePeople={setPeople}
        handlePercentage={setPercentage}
        billInput={billInput}
        peopleInput={peopleInput}
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
