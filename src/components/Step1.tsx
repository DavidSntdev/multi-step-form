import {
  h1Class,
  pClass,
  labelStep1,
  inputStep1,
  divForm,
} from "../data/styles";
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
        <div className={divForm}>
          <label htmlFor="name" className={labelStep1}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className={inputStep1}
          />
        </div>
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
              "text-[var(--colorCoolGray)]",
              "placeholder:text-[var(--colorCoolGray)]",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-[var(--colorWhite)]",
              "hover:bg-gray-300 dark:hover:bg-gray-700",
              "focus:bg-gray-100 dark:focus:bg-gray-600",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "rounded-md",
              "!cursor-text",
            ],
          }}
        />
        <div className={divForm}>
          <label htmlFor="number" className={labelStep1}>
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="e.g. + 1 234 567 890"
            className={inputStep1}
          />
        </div>
      </form>
    </>
  );
}

export default Step1;
