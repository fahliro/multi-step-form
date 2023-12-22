import { Suspense } from "react";
import { IStepper } from "../interfaces/Stepper";
import Loading from "./Loading";

const Stepper = ({ isActive, label, number }: IStepper) => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
            md:grid md:grid-cols-4 md:pt-0 md:mb-7 md:cursor-pointer"
      >
        <div
          className={`
            border-[0.0625rem] border-primary-light-blue border-solid rounded-full h-10 w-10 grid items-center justify-center font-bold 
            
            ${isActive && "bg-primary-light-blue"} 
            ${
              isActive
                ? "border-primary-light-blue"
                : "border-neutral-light-grey"
            } 
            ${!isActive && "text-neutral-white"} 
            
            md:h-8 md:w-8 md:font-normal`}
        >
          {number}
        </div>
        <div
          className="
                hidden 
                
                md:col-span-3 md:block"
        >
          <div
            className="
              text-sm text-neutral-light-gray"
          >
            STEP {number}
          </div>
          <div
            className="
              text-neutral-white font-bold text-xs tracking-widest"
          >
            {label}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Stepper;
