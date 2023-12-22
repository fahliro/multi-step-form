import { Suspense, lazy } from "react";
import Loading from "./Loading";
const Stepper = lazy(() => import("./Stepper"));

const Sidebar = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
        bg-sidebar-mobile
        bg-no-repeat
        bg-center
        bg-cover
        h-44
        px-16
        pt-10
        grid grid-flow-col

        md:block
        md:p-5
        md:rounded-lg
        md:h-full
        md:bg-sidebar-desktop
        md:grid-flow-row"
      >
        <Stepper number={1} label="YOUR INFO" isActive={true} />
        <Stepper number={2} label="SELECT PLAN" isActive={false} />
        <Stepper number={3} label="ADD-ONS" isActive={false} />
        <Stepper number={4} label="SUMMARY" isActive={false} />
      </div>
    </Suspense>
  );
};

export default Sidebar;
