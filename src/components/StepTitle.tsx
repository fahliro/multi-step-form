import { Suspense } from "react";
import { IStepTitle } from "../interfaces";
import Loading from "./Loading";

const StepTitle = ({ title, description }: IStepTitle) => {
  return (
    <Suspense fallback={<Loading />}>
      <>
        <h1
          className="
          text-xl font-bold text-primary-marine-blue

          md:text-3xl"
        >
          {title}
        </h1>
        <p
          className="
          text-neutral-cool-gray pt-1 text-sm"
        >
          {description}
        </p>
      </>
    </Suspense>
  );
};

export default StepTitle;
