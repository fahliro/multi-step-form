import { Suspense, lazy } from "react";
import {
  ADVANCED_PRICE_MONTHLY,
  ADVANCED_PRICE_YEARLY,
  ARCADE_PRICE_MONTHLY,
  ARCADE_PRICE_YEARLY,
  LS_OR_CP_PRICE_MONTHLY,
  LS_OR_CP_PRICE_YEARLY,
  ONLINE_SERVICE_PRICE_MONTHLY,
  ONLINE_SERVICE_PRICE_YEARLY,
  PRO_PRICE_MONTHLY,
  PRO_PRICE_YEARLY,
} from "../constants";
import { AddOns, PlanType, SummaryCardType } from "../enums";
import { IProps } from "../interfaces";
import { capitalizeFirstLetter } from "../utils/formaters";
import Loading from "./Loading";
const SummaryCard = lazy(() => import("./SummaryCard"));
const StepTitle = lazy(() => import("./StepTitle"));

const Summary = ({ props }: IProps) => {
  const { planType, subscriptionType, addOns, isMonthly } = props;

  const PLAN_TYPE: SummaryCardType = SummaryCardType.PLAN_TYPE;
  const ADD_ONS: SummaryCardType = SummaryCardType.ADD_ONS;
  const TOTAL: SummaryCardType = SummaryCardType.TOTAL;

  const ARCADE: PlanType = PlanType.ARCADE;
  const ADVANCED: PlanType = PlanType.ADVANCED;
  const PRO: PlanType = PlanType.PRO;

  const handleAddOnsPrice = ({ item }: { item: AddOns }): number => {
    return item === AddOns.ONLINE_SERVICE
      ? isMonthly
        ? ONLINE_SERVICE_PRICE_MONTHLY
        : ONLINE_SERVICE_PRICE_YEARLY
      : isMonthly
      ? LS_OR_CP_PRICE_MONTHLY
      : LS_OR_CP_PRICE_YEARLY;
  };

  const renderAddOns = (): JSX.Element[] => {
    return addOns.map((item: AddOns, index: number) => (
      <SummaryCard
        key={index}
        title={capitalizeFirstLetter({
          value: item,
        })}
        price={handleAddOnsPrice({ item })}
        type={ADD_ONS}
        props={props}
      />
    ));
  };

  const handlePlanPrice = (): number => {
    switch (planType) {
      case ARCADE:
        return isMonthly ? ARCADE_PRICE_MONTHLY : ARCADE_PRICE_YEARLY;
      case ADVANCED:
        return isMonthly ? ADVANCED_PRICE_MONTHLY : ADVANCED_PRICE_YEARLY;
      case PRO:
        return isMonthly ? PRO_PRICE_MONTHLY : PRO_PRICE_YEARLY;
      default:
        return 0;
    }
  };

  const handleTotal = (): number => {
    const planPrice: number = handlePlanPrice();
    const addOnsPrice: number = addOns
      .map((item: AddOns) => handleAddOnsPrice({ item }))
      .reduce((a: number, b: number) => a + b, 0);

    return planPrice + addOnsPrice;
  };

  const isAddOns: boolean = addOns.length > 0;

  return (
    <Suspense fallback={<Loading />}>
      <StepTitle
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div
        className="
        mt-5 bg-neutral-alabaster p-5 rounded-lg"
      >
        <div
          className={`${
            isAddOns &&
            "border-b-[0.0625rem] border-solid border-neutral-light-gray pb-3"
          } `}
        >
          <SummaryCard
            title={`${capitalizeFirstLetter({
              value: planType as string,
            })} (${capitalizeFirstLetter({ value: subscriptionType })})`}
            price={handlePlanPrice()}
            type={PLAN_TYPE}
            props={props}
          />
        </div>
        {isAddOns && <div className="grid gap-1 pt-3">{renderAddOns()}</div>}
      </div>
      <div className="pt-4 px-5">
        <SummaryCard
          title={`Total (per ${isMonthly ? "month" : "year"})`}
          price={handleTotal()}
          type={TOTAL}
          props={props}
        />
      </div>
    </Suspense>
  );
};

export default Summary;
