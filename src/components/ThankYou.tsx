import { Suspense } from "react";
import Loading from "./Loading";

const ThankYou = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
        grid grid-cols-12 
        
        md:mt-28"
      >
        <div
          className="
            col-span-12
            "
        >
          <div
            className="
          grid justify-center items-center"
          >
            <img src="src/assets/images/icon-thank-you.svg" alt="Thank You" />
          </div>
          <div
            className="
          text-center mt-5"
          >
            <h1
              className="
          text-xl font-bold text-primary-marine-blue

          md:text-3xl"
            >
              Thank You!
            </h1>
            <p
              className="
          text-neutral-cool-gray pt-3 text-sm"
            >
              Thanks for confirming your Subscription! We hope you have fun
              using our platform. If ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ThankYou;
