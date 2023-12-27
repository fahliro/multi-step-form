import { Suspense } from "react";
import { SummaryCardType } from "../enums";
import { IProps, ISummaryCard } from "../interfaces";
import { handlePriceLabel } from "../utils/formater";
import Loading from "./Loading";

const SummaryCard = ({ title, price, type, props }: IProps & ISummaryCard) => {
  const { isMonthly } = props;

  const isPlanType: boolean = type === SummaryCardType.PLAN_TYPE;
  const isAddOns: boolean = type === SummaryCardType.ADD_ONS;
  const isTotal: boolean = type === SummaryCardType.TOTAL;

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
      grid grid-cols-5"
      >
        <div
          className={`col-span-4 text-sm ${
            isPlanType
              ? "font-bold text-primary-marine-blue"
              : "text-neutral-cool-gray"
          }`}
        >
          {title}
        </div>
        <div
          className={`text-primary-marine-blue grid justify-end ${
            (isPlanType || isTotal) && "font-bold"
          } ${isTotal ? "text-md text-primary-purplish-blue" : "text-xs"}`}
        >
          {isAddOns
            ? `+${handlePriceLabel({ price, isMonthly })}`
            : handlePriceLabel({ price, isMonthly })}
        </div>
      </div>
    </Suspense>
  );
};

export default SummaryCard;
