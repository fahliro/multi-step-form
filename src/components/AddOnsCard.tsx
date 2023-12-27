import { Suspense } from "react";
import { AddOns } from "../enums";
import { IAddOnsCard, IProps } from "../interfaces";
import { capitalizeFirstLetter, handlePriceLabel } from "../utils/formater";
import Loading from "./Loading";

const AddOnsCard = ({
  title,
  description,
  price,
  selected,
  props,
}: IProps & IAddOnsCard) => {
  const { isMonthly, addOns, setAddOns } = props;

  const handleClick = (): void => {
    const isExist = addOns.includes(title);

    if (!isExist) {
      setAddOns((prev: AddOns[]) => [...prev, title]);
    } else {
      const items = addOns.filter((item: AddOns) => item !== title);
      setAddOns(items);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={`
      grid grid-cols-12 border-[0.0625rem] border-solid border-neutral-light-gra rounded-lg px-1 py-3
      
      hover:bg-neutral-alabaster hover:border-primary-purplish-blue

      ${selected && "bg-neutral-alabaster border-primary-purplish-blue"}
  `}
      >
        <div className="col-span-2 grid justify-center items-center">
          <input
            type="checkbox"
            className="
        h-5 w-5 accent-primary-purplish-blue
        
        md:cursor-pointer"
            onChange={handleClick}
            checked={selected}
          />
        </div>
        <div className="col-span-7">
          <div className="text-primary-marine-blue font-bold text-sm">
            {capitalizeFirstLetter({
              value: title,
            })}
          </div>
          <div className="text-sm text-neutral-cool-gray">{description}</div>
        </div>
        <div className="col-span-3 grid justify-center items-center font-bold text-sm text-primary-purplish-blue">
          +{handlePriceLabel({ price, isMonthly })}
        </div>
      </div>
    </Suspense>
  );
};

export default AddOnsCard;
