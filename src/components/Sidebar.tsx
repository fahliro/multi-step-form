import { Suspense, lazy } from "react";
import { IProps } from "../interfaces";
import Loading from "./Loading";
const Stepper = lazy(() => import("./Stepper"));

const Sidebar = ({ props: { step } }: IProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
        bg-sidebar-mobile bg-no-repeat bg-center bg-cover h-44 px-16 pt-10 grid grid-flow-col

        md:block md:px-8 md:pt-10 md:rounded-lg md:h-full md:bg-sidebar-desktop md:grid-flow-row"
      >
        <Stepper number={1} label="YOUR INFO" isActive={step === 1} />
        <Stepper number={2} label="SELECT PLAN" isActive={step === 2} />
        <Stepper number={3} label="ADD-ONS" isActive={step === 3} />
        <Stepper
          number={4}
          label="SUMMARY"
          isActive={step === 4 || step === 5}
        />
      </div>
    </Suspense>
  );
};

export default Sidebar;
