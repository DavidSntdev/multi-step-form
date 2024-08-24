import { Step1Data } from "./interfaces";

export const validateStep1 = (step1Data: Step1Data) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namePattern = /^[a-zA-Z\s]+$/;
  const phonePattern = /^\+?\d{1,2}\s?\d{3}\s?\d{3}\s?\d{3}$/;

  return (
    namePattern.test(step1Data.name) &&
    emailPattern.test(step1Data.email) &&
    phonePattern.test(step1Data.phoneNumber)
  );
};
