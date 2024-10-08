import { useState } from "react";
import { data } from "../data/data";
import { Switch, cn } from "@nextui-org/react";
import { h1Class, pClass, h1Plans, divPlans } from "../data/styles";

interface Step2Props {
  Step2Data: {
    escolha: string;
    mensal: boolean;
  };
  setStep2Data: React.Dispatch<
    React.SetStateAction<{
      escolha: string;
      mensal: boolean;
    }>
  >;
  isGringo: boolean;
}

function Step2({ Step2Data, setStep2Data, isGringo }: Step2Props) {
  const [yearly, setYearly] = useState(Step2Data.mensal);
  const [selectedPlan, setSelectedPlan] = useState(Step2Data.escolha);

  const selecionar = (plan: string) => {
    setSelectedPlan(plan);
    setStep2Data((prevState) => ({
      ...prevState,
      escolha: plan,
    }));
  };

  const changeMode = () => {
    const newYearly = !yearly;
    setYearly(newYearly);
    setStep2Data((prevState) => ({
      ...prevState,
      mensal: newYearly,
    }));
  };

  return (
    <>
      <h1 className={h1Class}>
        {isGringo ? "Select your plan" : "Selecione seu plano"}
      </h1>
      <p className={pClass}>
        {isGringo
          ? "You have the option of monthly or yearly billing"
          : "Você tem a opção de cobrança mensal ou anual"}
      </p>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
        <button
          className={`${divPlans} cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 outline-[var(--colorPurplishBlue)] lg:flex-col lg:w-44`}
          onClick={() => selecionar("Arcade")}
          style={{
            border:
              selectedPlan === "Arcade"
                ? "1px solid var(--colorPurplishBlue)"
                : "1px solid var(--colorLightGray)",
            backgroundColor:
              selectedPlan === "Arcade"
                ? "var(--colorMagnolia)"
                : "var(--colorWhite)",
            boxShadow:
              selectedPlan === "Arcade"
                ? "0 0 10px rgba(123, 97, 255, 0.5)"
                : "none",
          }}
        >
          <img src={data.iconArcade} alt="" />
          <div className="flex flex-col text-left">
            <h1 className={h1Plans}>{isGringo ? "Arcade" : "Basico"}</h1>
            <p className="text-[var(--colorCoolGray)]">
              {yearly
                ? isGringo
                  ? "$90/yr"
                  : "R$90/ano"
                : isGringo
                ? "$9/mo"
                : "R$9/mês"}
            </p>
            {yearly && (
              <p className="text-[var(--colorPurplishBlue)] font-medium text-base">
                {isGringo ? "2 months free" : "2 meses grátis"}
              </p>
            )}
          </div>
        </button>
        <button
          className={`${divPlans} cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 outline-[var(--colorPurplishBlue)] lg:flex-col lg:w-44`}
          onClick={() => selecionar("Advanced")}
          style={{
            border:
              selectedPlan === "Advanced"
                ? "1px solid var(--colorPurplishBlue)"
                : "1px solid var(--colorLightGray)",
            backgroundColor:
              selectedPlan === "Advanced"
                ? "var(--colorMagnolia)"
                : "var(--colorWhite)",
            boxShadow:
              selectedPlan === "Advanced"
                ? "0 0 10px rgba(123, 97, 255, 0.5)"
                : "none",
          }}
        >
          <img src={data.iconAdvanced} alt="" />
          <div className="flex flex-col text-left">
            <h1 className={h1Plans}>{isGringo ? "Advanced" : "Avançado"}</h1>
            <p className="text-[var(--colorCoolGray)]">
              {yearly
                ? isGringo
                  ? "$120/yr"
                  : "R$120/ano"
                : isGringo
                ? "$12/mo"
                : "R$12/mês"}
            </p>
            {yearly && (
              <p className="text-[var(--colorPurplishBlue)] font-medium text-base">
                {isGringo ? "2 months free" : "2 meses grátis"}
              </p>
            )}
          </div>
        </button>
        <button
          className={`${divPlans} cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 outline-[var(--colorPurplishBlue)] lg:flex-col lg:w-44`}
          onClick={() => selecionar("Pro")}
          style={{
            border:
              selectedPlan === "Pro"
                ? "1px solid var(--colorPurplishBlue)"
                : "1px solid var(--colorLightGray)",
            backgroundColor:
              selectedPlan === "Pro"
                ? "var(--colorMagnolia)"
                : "var(--colorWhite)",
            boxShadow:
              selectedPlan === "Pro"
                ? "0 0 10px rgba(123, 97, 255, 0.5)"
                : "none",
          }}
        >
          <img src={data.iconPro} alt="" />
          <div className="flex flex-col text-left">
            <h1 className={h1Plans}>{isGringo ? "Pro" : "Profissional"}</h1>
            <p className="text-[var(--colorCoolGray)]">
              {yearly
                ? isGringo
                  ? "$150/yr"
                  : "R$150/ano"
                : isGringo
                ? "$15/mo"
                : "R$15/mês"}
            </p>
            {yearly && (
              <p className="text-[var(--colorPurplishBlue)] font-medium text-base">
                {isGringo ? "2 months free" : "2 meses grátis"}
              </p>
            )}
          </div>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 py-2 mt-5 lg:pt-5">
        <p
          className="font-bold text-lg transition-colors duration-500 ease-in-out"
          style={{
            color: yearly ? "var(--colorCoolGray)" : "var(--colorMarineBlue)",
          }}
        >
          {isGringo ? "Monthly" : "Mensal"}
        </p>
        <Switch
          checked={yearly}
          onChange={changeMode}
          classNames={{
            wrapper: cn(
              "bg-[var(--colorMarineBlue)]",
              "group-data-[selected=true]:bg-[var(--colorMarineBlue)]",
              "group-data-[focus-visible=true]:ring-[var(--colorMarineBlue)]"
            ),
          }}
        />
        <p
          className="font-bold text-lg transition-colors duration-500 ease-in-out"
          style={{
            color: yearly ? "var(--colorMarineBlue)" : "var(--colorCoolGray)",
          }}
        >
          {isGringo ? "Yearly" : "Anual"}
        </p>
      </div>
    </>
  );
}

export default Step2;
