import { Suspense, lazy } from "react";
import {
  ADVANCED_PRICE_MONTHLY,
  ADVANCED_PRICE_YEARLY,
  ARCADE_PRICE_MONTHLY,
  ARCADE_PRICE_YEARLY,
  PRO_PRICE_MONTHLY,
  PRO_PRICE_YEARLY,
  REQUIRED_PLAN_TYPE,
} from "../constants";
import { PlanType } from "../enums";
import { IProps } from "../interfaces";
import Loading from "./Loading";
const PlanSwitcher = lazy(() => import("./PlanSwitcher"));
const PlanCard = lazy(() => import("./PlanCard"));
const StepTitle = lazy(() => import("./StepTitle"));

const SelectPlan = ({ props }: IProps) => {
  const { isMonthly, isArcade, isAdvanced, isPro, planType, isInvalidStep } =
    props;

  const ARCADE: PlanType = PlanType.ARCADE;
  const ADVANCED: PlanType = PlanType.ADVANCED;
  const PRO: PlanType = PlanType.PRO;

  const isError: boolean = isInvalidStep && !planType;

  return (
    <Suspense fallback={<Loading />}>
      <StepTitle
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      {isError && (
        <div
          className="
          text-primary-strawberry-red text-xs font-bold mt-5"
        >
          {REQUIRED_PLAN_TYPE}
        </div>
      )}
      <div
        className={`
      grid gap-3 

      ${isError ? "mt-3" : "mt-5"}
      
      md:grid-cols-3 md:grid-flow-col`}
      >
        <PlanCard
          title={ARCADE}
          price={isMonthly ? ARCADE_PRICE_MONTHLY : ARCADE_PRICE_YEARLY}
          selected={isArcade}
          props={props}
        />
        <PlanCard
          title={ADVANCED}
          price={isMonthly ? ADVANCED_PRICE_MONTHLY : ADVANCED_PRICE_YEARLY}
          selected={isAdvanced}
          props={props}
        />
        <PlanCard
          title={PRO}
          price={isMonthly ? PRO_PRICE_MONTHLY : PRO_PRICE_YEARLY}
          selected={isPro}
          props={props}
        />
      </div>
      <div className="mt-5">
        <PlanSwitcher props={props} />
      </div>
    </Suspense>
  );
};

export default SelectPlan;
