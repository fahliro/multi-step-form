import { Suspense, lazy } from "react";
import { SubscriptionType } from "../enums";
import { IProps } from "../interfaces";
import { capitalizeFirstLetter } from "../utils/formater";
import Loading from "./Loading";
const Switch = lazy(() => import("./Switch"));

const PlanSwitcher = ({ props }: IProps) => {
  const { isMonthly } = props;

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
      grid grid-cols-8 gap-3 bg-neutral-alabaster rounded-lg p-2 items-center"
      >
        <div
          className={`
        col-span-3 text-xs text-right font-bold ${
          isMonthly ? "text-primary-marine-blue" : "text-neutral-cool-gray"
        }`}
        >
          {capitalizeFirstLetter({
            value: SubscriptionType.MONTHLY,
          })}
        </div>
        <div
          className="
        col-span-2 grid justify-center"
        >
          <Switch props={props} />
        </div>
        <div
          className={`
        col-span-3 text-xs font-bold ${
          !isMonthly ? "text-primary-marine-blue" : "text-neutral-cool-gray"
        }`}
        >
          {capitalizeFirstLetter({
            value: SubscriptionType.YEARLY,
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default PlanSwitcher;
