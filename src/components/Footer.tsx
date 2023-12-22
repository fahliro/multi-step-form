import { Suspense } from "react";
import Loading from "./Loading";

const Footer = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        className="
            absolute w-full bottom-0 py-10 bg-neutral-white drop-shadow-1xl

            md:right-[4.75rem] md:bottom-8 md:w-auto md:py-0"
      >
        <button
          className="
          bg-primary-marine-blue text-neutral-white px-5 py-3 rounded-lg right-5 absolute bottom-4
          
          md:py-2.5 md:relative md:right-0 md:bottom-0 md:text-sm"
        >
          Next Step
        </button>
      </div>
    </Suspense>
  );
};

export default Footer;
