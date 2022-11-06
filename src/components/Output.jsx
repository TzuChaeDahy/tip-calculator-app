import { useEffect, useRef } from "react";
import Amount from "./layout/Amout";

const Output = ({ tipAmount, totalAmount, handleReset, isButtonEnable }) => {
  const button = useRef();

  useEffect(() => {
    if (isButtonEnable) {
      button.current.disabled = false;
    } else {
      button.current.disabled = true;
    }
  }, [isButtonEnable]);

  const containerStyles =
    "flex flex-col justify-between gap-6 px-5 py-6 rounded-xl bg-project-cyan-300 ";
  const buttonStyles =
    "uppercase bg-project-cyan-200 w-full py-2 rounded-md text-project-cyan-300 transition hover:bg-project-cyan-100 disabled:bg-project-neutral-300 disabled:text-project-neutral-400";
  const amountsContainer = "flex flex-col gap-6 md:gap-16";

  return (
    <div className={containerStyles}>
      <div className={amountsContainer}>
        <Amount title="Tip Amount" value={tipAmount} />
        <Amount title="Total" value={totalAmount} />
      </div>
      <button className={buttonStyles} onClick={handleReset} ref={button}>
        reset
      </button>
    </div>
  );
};

export default Output;
