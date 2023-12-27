import { Suspense } from "react";
import { IProps } from "../interfaces";
import Loading from "./Loading";

const Footer = ({
  props: {
    step,
    setStep,
    name,
    isValidEmail,
    phone,
    setIsInvalidStep,
    planType,
    footerRef,
  },
}: IProps) => {
  const isLastStep: boolean = step === 4;

  const handleStep = ({ isPlus }: { isPlus: boolean }): void => {
    const value: number = isPlus ? step + 1 : step - 1;

    setStep(value);
  };

  const handleClick = (): void => {
    const isValidStep: boolean = step < 5;
    const isFirstStep: boolean = step === 1;
    const isSecondStep: boolean = step === 2;
    const isValidFirstStep: boolean =
      Boolean(name) &&
      isValidEmail &&
      Boolean(phone) &&
      isFirstStep &&
      isValidStep;
    const isValidSecondStep: boolean =
      Boolean(planType) && isSecondStep && isValidStep;

    if (isValidFirstStep || isValidSecondStep || step > 2) {
      handleStep({ isPlus: true });
      setIsInvalidStep(false);
    } else {
      setIsInvalidStep(true);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        ref={footerRef}
        className="
      grid grid-cols-2 fixed bottom-0 px-5 py-3 w-full bg-neutral-white border-t-[0.0625rem] border-solid border-neutral-light-gray
      
      md:px-16 md:bottom-3 md:py-0 md:border-t-0 md:absolute"
      >
        <div
          className={`
          grid justify-start items-center
          
          ${step > 1 ? "visible" : "invisible"}
          `}
        >
          <button
            className="
          text-sm text-neutral-cool-gray font-bold

          focus:outline-0
          
          md:hover:text-primary-marine-blue"
            onClick={() => step > 1 && handleStep({ isPlus: false })}
          >
            Go Back
          </button>
        </div>
        <div
          className="
        grid justify-end"
        >
          <button
            className={`
          text-neutral-white px-5 py-2.5 rounded-lg
          
          ${isLastStep ? "bg-primary-purplish-blue" : "bg-primary-marine-blue"}

          focus:outline-0

          md:text-sm`}
            onClick={handleClick}
          >
            {isLastStep ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default Footer;
