import { RefObject } from "react";
import { AddOns, PlanType, SubscriptionType, SummaryCardType } from "../enums";

export interface IInput {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IPlanCard {
    title: PlanType;
    price: number;
    selected: boolean;
}

export interface IStepper {
    isActive: boolean,
    label: string,
    number: number
}

export interface IStepTitle {
    title: string;
    description: string;
}

export interface IAddOnsCard {
    title: AddOns;
    description: string;
    price: number;
    selected: boolean;
}

export interface ISummaryCard {
    title: string;
    price: number;
    type: SummaryCardType
}

export interface IStates {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    phone: string,
    setPhone: React.Dispatch<React.SetStateAction<string>>,
    planType: PlanType | null,
    setPlanType: React.Dispatch<React.SetStateAction<PlanType | null>>,
    subscriptionType: SubscriptionType,
    setSubscriptionType: React.Dispatch<React.SetStateAction<SubscriptionType>>,
    addOns: AddOns[],
    setAddOns: React.Dispatch<React.SetStateAction<AddOns[]>>,
    isMonthly: boolean,
    isArcade: boolean,
    isAdvanced: boolean,
    isPro: boolean,
    isInvalidStep: boolean,
    setIsInvalidStep: React.Dispatch<React.SetStateAction<boolean>>,
    isValidEmail: boolean,
    setIsValidEmail: React.Dispatch<React.SetStateAction<boolean>>,
    contentRef: RefObject<HTMLDivElement>
    containerRef: RefObject<HTMLDivElement>
    footerRef: RefObject<HTMLDivElement>
}

export interface IProps {
    props: IStates
}