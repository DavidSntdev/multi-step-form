import { h1Class, pClass } from "../data/styles";
import { Input } from "@nextui-org/react";
import { MailIcon } from "./utils/MailIcon";

function Step1() {
  return (
    <>
      <h1 className={h1Class}>Personal Info</h1>
      <p className={pClass}>
        Please provide your name, email address, and phone number.
      </p>
      <form action="" className="flex flex-col gap-4">
        <Input
          type="text"
          label="Name"
          placeholder="Your Name"
          labelPlacement="outside"
          errorMessage="The field is required"
          classNames={{
            label: [
              "text-[var(--colorMarineBlue)] font-medium text-base",
              "group-data-[filled-within=true]:text-[var(--colorMarineBlue)]",
            ],
            input: [
              "bg-white",
              "text-[var(--colorPurplishBlue)] font-bold",
              "placeholder:text-[var(--colorCoolGray)]",
              "group-data-[has-value=true]:text-[var(--colorPurplishBlue)]",
            ],
            innerWrapper: ["bg-transparent"],
            inputWrapper: [
              "shadow-xl",
              "bg-[var(--colorWhite)]",
              "group-data-[hover=true]:bg-gray-200",
              "backdrop-blur-sm",
              "rounded-md",
              "!cursor-text",
              "border border-[var(--colorLightGray)]",
              "py-6",
            ],
          }}
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          labelPlacement="outside"
          errorMessage="Please enter a valid email"
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          classNames={{
            label: [
              "text-[var(--colorMarineBlue)] font-medium text-base",
              "group-data-[filled-within=true]:text-[var(--colorMarineBlue)]",
            ],
            input: [
              "bg-white",
              "text-[var(--colorPurplishBlue)] font-bold",
              "placeholder:text-[var(--colorCoolGray)]",
              "group-data-[has-value=true]:text-[var(--colorPurplishBlue)]",
            ],
            innerWrapper: ["bg-transparent"],
            inputWrapper: [
              "shadow-xl",
              "bg-[var(--colorWhite)]",
              "group-data-[hover=true]:bg-gray-200",
              "backdrop-blur-sm",
              "rounded-md",
              "!cursor-text",
              "border border-[var(--colorLightGray)]",
              "py-6",
            ],
          }}
        />
        <Input
          type="number"
          label="Phone Number"
          placeholder="+0 000 000 000"
          labelPlacement="outside"
          errorMessage="The field is required"
          classNames={{
            label: [
              "text-[var(--colorMarineBlue)] font-medium text-base",
              "group-data-[filled-within=true]:text-[var(--colorMarineBlue)]",
            ],
            input: [
              "bg-white",
              "text-[var(--colorPurplishBlue)] font-bold",
              "placeholder:text-[var(--colorCoolGray)]",
              "group-data-[has-value=true]:text-[var(--colorPurplishBlue)]",
            ],
            innerWrapper: ["bg-transparent"],
            inputWrapper: [
              "shadow-xl",
              "bg-[var(--colorWhite)]",
              "group-data-[hover=true]:bg-gray-200",
              "backdrop-blur-sm",
              "rounded-md",
              "!cursor-text",
              "border border-[var(--colorLightGray)]",
              "py-6",
            ],
          }}
        />
      </form>
    </>
  );
}

export default Step1;
