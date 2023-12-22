import { Suspense, lazy } from "react";
import Loading from "./Loading";
const Input = lazy(() => import("./Input"));
const Footer = lazy(() => import("./Footer"));

const Content = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
        absolute top-28 mx-5 rounded-lg bg-neutral-white px-5 py-7 drop-shadow-1xl

        md:relative md:top-0 md:mx-16 md:px-0 md:pt-10 md:py-0"
      >
        <h1
          className="
          text-xl font-bold text-primary-marine-blue

          md:text-3xl"
        >
          Personal info
        </h1>
        <p
          className="
          text-neutral-cool-gray pt-1 text-sm"
        >
          Please provide your name, email address, and phone number.
        </p>

        <form
          className="
          grid gap-3 mt-5"
        >
          <Input label="Name" placeholder="e.g. Stephen King" />
          <Input
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input label="Phone Number" placeholder="e.g. +1 234 567 890" />
        </form>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Content;
