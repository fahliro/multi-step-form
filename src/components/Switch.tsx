import { Suspense } from "react";
import { SubscriptionType } from "../enums";
import { IProps } from "../interfaces";
import Loading from "./Loading";

const Switch = ({ props }: IProps) => {
  const { setSubscriptionType, isMonthly } = props;

  const handleChange = (): void => {
    const value: SubscriptionType = isMonthly
      ? SubscriptionType.YEARLY
      : SubscriptionType.MONTHLY;

    setSubscriptionType(value);
  };

  return (
    <Suspense fallback={<Loading />}>
      <label className="relative w-10 h-5 inline-block">
        <input
          type="checkbox"
          id="switch"
          className="invisible peer"
          onChange={handleChange}
          checked={!isMonthly}
        />
        <span
          className="
  bg-primary-marine-blue absolute top-0 left-0 right-0 bottom-0 rounded-full
  
  
    before:transition-all before:w-3.5 before:h-3.5 before:rounded-full before:bg-neutral-white before:absolute before:top-1/2 before:left-3 before:transform before:-translate-x-1/2 before:-translate-y-1/2
    
    peer-checked:before:left-7
    
    md:cursor-pointer"
        ></span>
      </label>
    </Suspense>
  );
};

export default Switch;
