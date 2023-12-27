import { Suspense, lazy } from "react";
import {
  LS_OR_CP_PRICE_MONTHLY,
  LS_OR_CP_PRICE_YEARLY,
  ONLINE_SERVICE_PRICE_MONTHLY,
  ONLINE_SERVICE_PRICE_YEARLY,
} from "../constants";
import { AddOns as AO } from "../enums";
import { IProps } from "../interfaces";
import Loading from "./Loading";
const AddOnsCard = lazy(() => import("./AddOnsCard"));
const StepTitle = lazy(() => import("./StepTitle"));

const AddOns = ({ props }: IProps) => {
  const { isMonthly, addOns } = props;

  const ONLINE_SERVICE: AO = AO.ONLINE_SERVICE;
  const LARGER_STORAGE: AO = AO.LARGER_STORAGE;
  const CUSTOMIZABLE_PROFILE: AO = AO.CUSTOMIZABLE_PROFILE;

  return (
    <Suspense fallback={<Loading />}>
      <StepTitle
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div
        className="
      grid gap-3 mt-5"
      >
        <AddOnsCard
          title={ONLINE_SERVICE}
          description={"Access to multiplayer games"}
          price={
            isMonthly
              ? ONLINE_SERVICE_PRICE_MONTHLY
              : ONLINE_SERVICE_PRICE_YEARLY
          }
          selected={addOns.includes(ONLINE_SERVICE)}
          props={props}
        />
        <AddOnsCard
          title={LARGER_STORAGE}
          description={"Extra 1TB of cloud save"}
          price={isMonthly ? LS_OR_CP_PRICE_MONTHLY : LS_OR_CP_PRICE_YEARLY}
          selected={addOns.includes(LARGER_STORAGE)}
          props={props}
        />
        <AddOnsCard
          title={CUSTOMIZABLE_PROFILE}
          description={"Custome theme on your profile"}
          price={isMonthly ? LS_OR_CP_PRICE_MONTHLY : LS_OR_CP_PRICE_YEARLY}
          selected={addOns.includes(CUSTOMIZABLE_PROFILE)}
          props={props}
        />
      </div>
    </Suspense>
  );
};

export default AddOns;
