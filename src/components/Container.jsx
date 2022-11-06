import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Form from "./Form";
import Output from "./Output";

const Container = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [redRing, setRedRing] = useState(false);
  const [buttonEnable, setButtonEnable] = useState(false);

  const billInput = useRef(null);
  const peopleInput = useRef(null);
  const percentageInput = useRef(null);

  const handleReset = () => {
    if (bill || percentage || people) {
      setBill(0);
      setPeople("");
      setPercentage(0);
      billInput.current.value = "";
      peopleInput.current.value = "";
      percentageInput.current.value = "";
      return;
    }
  };

  useEffect(() => {
    if (bill || percentage || people) {
      setButtonEnable(true);
    } else {
      setButtonEnable(false);
    }

    if (people === "0" || people === "") {
      setTipAmount("0.00");
      setTotalAmount("0.00");
      if (people === "0") {
        setRedRing(true);
        console.log(people);
      } else {
        setRedRing(false);
      }
      return;
    }

    setTipAmount(((bill * percentage) / +people).toFixed(2));
    setTotalAmount(((bill / +people) * (percentage + 1)).toFixed(2));
  }, [bill, people, percentage]);

  const containerStyles =
    "p-5 bg-project-neutral-100 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl";

  return (
    <div className={containerStyles}>
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
        isButtonEnable={buttonEnable}
      />
    </div>
  );
};

export default Container;
