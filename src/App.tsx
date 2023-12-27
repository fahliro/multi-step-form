/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, lazy, useEffect, useRef, useState } from "react";
import { MOBILE_VIEW } from "./constants";
import { AddOns, PlanType, SubscriptionType } from "./enums";
import { IStates } from "./interfaces";
const Content = lazy(() => import("./components/Content"));
const Sidebar = lazy(() => import("./components/Sidebar"));

const App = () => {
  const [step, setStep] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  const [planType, setPlanType] = useState<PlanType | null>(null);
  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>(
    SubscriptionType.MONTHLY
  );

  const [addOns, setAddOns] = useState<AddOns[]>([]);

  const [isInvalidStep, setIsInvalidStep] = useState<boolean>(false);

  const contentRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const containerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const footerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const [initialContainerHeight, setInitialContainerHeight] =
    useState<number>(0);

  const handleContainerHeight = (): void => {
    if (containerRef.current && contentRef.current && footerRef.current) {
      const contentHeight: number = contentRef.current.clientHeight;
      const contentTop: number = contentRef.current.offsetTop;
      const footerHeight: number = footerRef.current.clientHeight;
      const ogContentHeight: number = contentHeight + contentTop + footerHeight;

      const diffHeight: number = initialContainerHeight - ogContentHeight;

      const paddingBottom: number = 20;

      const handlePaddingBottom = (): number =>
        ogContentHeight > initialContainerHeight
          ? Math.abs(diffHeight) + paddingBottom
          : 0;

      const dynamicContainerHeight: number =
        ogContentHeight + diffHeight + handlePaddingBottom();

      containerRef.current.style.height = `${dynamicContainerHeight}px`;
    }
  };

  useEffect(() => {
    if (containerRef.current)
      setInitialContainerHeight(containerRef.current.clientHeight);
  }, []);

  const isMobileView: boolean = window.matchMedia(
    `(max-width: ${MOBILE_VIEW})`
  ).matches;

  useEffect(() => {
    isMobileView && initialContainerHeight && handleContainerHeight();
  }, [subscriptionType, isInvalidStep, planType, initialContainerHeight]);

  const props: IStates = {
    step,
    setStep,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    planType,
    setPlanType,
    subscriptionType,
    setSubscriptionType,
    addOns,
    setAddOns,
    isMonthly: subscriptionType === SubscriptionType.MONTHLY,
    isArcade: planType === PlanType.ARCADE,
    isAdvanced: planType === PlanType.ADVANCED,
    isPro: planType === PlanType.PRO,
    isInvalidStep,
    setIsInvalidStep,
    isValidEmail,
    setIsValidEmail,
    contentRef,
    containerRef,
    footerRef,
  };

  return (
    <div
      ref={containerRef}
      className={`
        bg-neutral-magnolia h-screen
        
        md:grid md:items-center md:justify-center`}
    >
      <div
        className="
        md:bg-neutral-white md:p-3 md:grid md:grid-cols-12 md:rounded-lg md:shadow-lg md:w-[46.875rem] md:h-[31.25rem] md:relative"
      >
        <div
          className="
          md:col-span-4"
        >
          <Sidebar props={props} />
        </div>
        <div
          className="
            md:col-span-8 md:relative"
        >
          <Content props={props} />
        </div>
      </div>
    </div>
  );
};

export default App;
