import { Suspense, lazy } from "react";
import { IProps } from "../interfaces";
import Loading from "./Loading";
const YourInfo = lazy(() => import("./YourInfo"));
const ThankYou = lazy(() => import("./ThankYou"));
const Summary = lazy(() => import("./Summary"));
const AddOns = lazy(() => import("./AddOns"));
const SelectPlan = lazy(() => import("./SelectPlan"));
const Footer = lazy(() => import("./Footer"));

const Content = ({ props }: IProps) => {
  const { step, contentRef } = props;

  const renderContent = (): JSX.Element | null => {
    switch (step) {
      case 1:
        return <YourInfo props={props} />;
      case 2:
        return <SelectPlan props={props} />;
      case 3:
        return <AddOns props={props} />;
      case 4:
        return <Summary props={props} />;
      case 5:
        return <ThankYou />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        ref={contentRef}
        className="
          absolute top-28 left-0 right-0 mx-5 px-5 rounded-lg bg-neutral-white py-7 shadow-sm 
          
          md:relative md:top-0 md:mx-16 md:px-0 md:mt-10 md:py-0 md:shadow-none"
      >
        {renderContent()}
      </div>
      {step < 5 && <Footer props={props} />}
    </Suspense>
  );
};

export default Content;
