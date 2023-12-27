import { Suspense, lazy } from "react";
import { EMAIL, NAME, PHONE } from "../constants";
import { IProps } from "../interfaces";
import { handleValidation } from "../utils/vaildations";
import Loading from "./Loading";
const StepTitle = lazy(() => import("./StepTitle"));
const Input = lazy(() => import("./Input"));

const YourInfo = ({ props }: IProps) => {
  const { name, setName, email, setEmail, setIsValidEmail, phone, setPhone } =
    props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    const type: string = e.target.id.split("-")[0];

    switch (type) {
      case NAME:
        setName(value);
        break;
      case EMAIL:
        setEmail(value);
        setIsValidEmail(handleValidation({ type: EMAIL, value }));
        break;
      case PHONE:
        handleValidation({ type: PHONE, value }) && setPhone(value);
        break;
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <StepTitle
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />

      <form
        className="
          grid gap-3 mt-5"
      >
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={handleChange}
          props={props}
        />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={handleChange}
          props={props}
        />
        <Input
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={handleChange}
          props={props}
        />
      </form>
    </Suspense>
  );
};

export default YourInfo;
