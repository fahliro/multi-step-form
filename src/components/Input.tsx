import { Suspense } from "react";
import { EMAIL, INVALID_EMAIL, REQUIRED } from "../constants";
import { IInput, IProps } from "../interfaces";
import { convertLabelToHyphen } from "../utils/formater";
import Loading from "./Loading";

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  props,
}: IProps & IInput) => {
  const { isInvalidStep, isValidEmail } = props;

  const hyphenLabel: string = convertLabelToHyphen({ value: label });

  const type: string = label.split(" ")[0].toLowerCase();

  const isEmail: boolean = type === EMAIL;
  const isInvalid: boolean = isInvalidStep && !value;
  const isError: boolean = isEmail
    ? value
      ? !isValidEmail
      : isInvalid
    : isInvalid;

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
        grid gap-1"
      >
        <div className="grid grid-cols-2 items-end">
          <label
            htmlFor={hyphenLabel}
            className="
          text-primary-marine-blue text-sm"
          >
            {label}
          </label>
          {isError && (
            <div
              className="
          text-primary-strawberry-red text-xs font-bold grid justify-end"
            >
              {isEmail && value ? INVALID_EMAIL : REQUIRED}
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className={`
          placeholder:text-sm
          focus:outline-0 focus:border-[0.0625rem] focus:border-solid focus:border-primary-purplish-blue

          border-[0.0625rem] border-solid rounded-lg p-2.5 mt-1 text-primary-marine-blue text-sm
          
          ${
            isError
              ? "border-primary-strawberry-red"
              : "border-neutral-light-gray"
          }`}
          id={hyphenLabel}
          value={value}
          onChange={onChange}
        />
      </div>
    </Suspense>
  );
};

export default Input;
