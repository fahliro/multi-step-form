import { Suspense } from "react";
import { IInput } from "../interfaces/Input";
import { convertLabelToHyphen } from "../utils/Formater";
import Loading from "./Loading";

const Footer = ({ label, placeholder }: IInput) => {
  const hyphenLabel = convertLabelToHyphen({ value: label });

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
        grid gap-1"
      >
        <label
          htmlFor={hyphenLabel}
          className="
          text-primary-marine-blue text-sm"
        >
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="
          placeholder:text-sm
          focus:outline-0

          border-[0.0625rem] border-solid border-neutral-light-gray rounded-lg p-2.5 mt-1 text-primary-marine-blue text-sm"
          id={hyphenLabel}
        />
      </div>
    </Suspense>
  );
};

export default Footer;
