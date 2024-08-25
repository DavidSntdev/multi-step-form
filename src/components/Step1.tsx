import { h1Class, pClass } from "../data/styles";
import { Input } from "@nextui-org/react";
import { MailIcon } from "./utils/MailIcon";

interface Step1Props {
  step1Data: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  setStep1Data: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phoneNumber: string;
    }>
  >;
  isGringo: boolean;
}

function Step1({ step1Data, setStep1Data, isGringo }: Step1Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const formattedPhoneNumber = formatPhoneNumber(value);
      setStep1Data((prevData) => ({
        ...prevData,
        [name]: formattedPhoneNumber,
      }));
    } else {
      setStep1Data((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const part1 = numericValue.slice(0, 2);
    const part2 = numericValue.slice(2, 5);
    const part3 = numericValue.slice(5, 8);
    const part4 = numericValue.slice(8, 11);

    let formattedNumber = part1 ? `+${part1}` : "";
    if (part2) formattedNumber += ` ${part2}`;
    if (part3) formattedNumber += ` ${part3}`;
    if (part4) formattedNumber += ` ${part4}`;

    return formattedNumber;
  };

  return (
    <>
      <h1 className={h1Class}>
        {isGringo ? "Personal Info" : "Informação pessoal"}
      </h1>
      <p className={pClass}>
        {isGringo
          ? "Please provide your name, email address, and phone number to proceed."
          : "Por favor, forneça seu nome, e-mail e número de telefone para prosseguir."}
      </p>
      <form action="" className="flex flex-col gap-4">
        <Input
          type="text"
          name="name"
          label={isGringo ? "Name" : "Nome"}
          placeholder={isGringo ? "Your Name" : "Seu Nome"}
          labelPlacement="outside"
          errorMessage={
            isGringo ? "This field is required" : "O campo é obrigatório"
          }
          value={step1Data.name}
          onChange={handleChange}
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
              "group-data-[focus-visible=true]:ring-[var(--colorMarineBlue)]",
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
          name="email"
          label={isGringo ? "Email Address" : "Endereço de Email"}
          placeholder={isGringo ? "you@example.com" : "voce@exemplo.com"}
          labelPlacement="outside"
          errorMessage={
            isGringo
              ? "Please enter a valid email"
              : "Por favor insira um email válido"
          }
          value={step1Data.email}
          onChange={handleChange}
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
              "group-data-[focus-visible=true]:ring-[var(--colorMarineBlue)]",
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
          type="tel"
          name="phoneNumber"
          label={isGringo ? "Phone Number" : "Número de Telefone"}
          placeholder={isGringo ? "+0 000 000 000" : "+00 00000 0000"}
          labelPlacement="outside"
          errorMessage={
            isGringo ? "This field is required" : "O campo é obrigatório"
          }
          value={step1Data.phoneNumber}
          onChange={handleChange}
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
              "group-data-[focus-visible=true]:ring-[var(--colorMarineBlue)]",
              "py-6",
            ],
          }}
        />
      </form>
    </>
  );
}

export default Step1;
