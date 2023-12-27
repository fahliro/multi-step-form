import { Suspense } from "react";
import { PlanType } from "../enums";
import { IPlanCard, IProps } from "../interfaces";
import { capitalizeFirstLetter, handlePriceLabel } from "../utils/formater";
import Loading from "./Loading";

const PlanCard = ({ title, price, selected, props }: IProps & IPlanCard) => {
  const { setPlanType, isMonthly } = props;

  const handleClick = (): void => {
    setPlanType(title as PlanType);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        onClick={handleClick}
        className={`
      border-[0.0625rem] grid grid-cols-4 border-solid rounded-lg px-3 py-4 text-sm cursor-pointer

      hover:bg-neutral-alabaster hover:border-primary-purplish-blue

      ${
        selected
          ? "bg-neutral-alabaster border-primary-purplish-blue"
          : "border-neutral-light-gray"
      }

      md:block
  `}
      >
        <div>
          <img
            src={`src/assets/images/icon-${title.toLowerCase()}.svg`}
            alt={capitalizeFirstLetter({ value: title })}
          />
        </div>
        <div
          className="
        col-span-3"
        >
          <div
            className="
        font-bold text-primary-marine-blue
        
        md:mt-8"
          >
            {capitalizeFirstLetter({ value: title })}
          </div>
          <div
            className="
        mt-1 text-neutral-cool-gray
        "
          >
            {handlePriceLabel({ price, isMonthly })}
          </div>
          {!isMonthly && (
            <div
              className="
        mt-1 font-bold text-primary-marine-blue text-xs
        "
            >
              2 months free
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default PlanCard;
