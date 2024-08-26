import { Step1Data } from "./interfaces";

export const validateStep1 = (step1Data: Step1Data, isGringo: boolean) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[a-zA-Z\s]+$/;

  const gringoPhonePattern = /^\+\d{1,2}\s\d{3}\s\d{3}\s\d{3}$/;
  const nationalPhonePattern = /^\+\d{2}\s\d{5}\s\d{4}$/;

  const phonePattern = isGringo ? gringoPhonePattern : nationalPhonePattern;

  return (
    namePattern.test(step1Data.name) &&
    emailPattern.test(step1Data.email) &&
    phonePattern.test(step1Data.phoneNumber)
  );
};