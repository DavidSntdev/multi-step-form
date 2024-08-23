import { useState } from "react";
import { data } from "../data/data";
import { Switch, cn } from "@nextui-org/react";
import { h1Class, pClass, h1Plans, divPlans } from "../data/styles";

function Step2() {
  const [yearly, setYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const selecionar = (plan: string) => {
    setSelectedPlan(plan);
  };

  const changeMode = () => {
    setYearly(!yearly);
  };

  return (
    <>
      <h1 className={h1Class}>Select your plan</h1>
      <p className={pClass}>You have the option of monthly or yearly billing</p>
      <div className="flex flex-col gap-3">
        <div
          className={`${divPlans} cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105`}
          onClick={() => selecionar("Arcade")}
          style={{
            border:
              selectedPlan === "Arcade"
                ? "1px solid var(--colorPurplishBlue)"
                : "1px solid var(--colorLightGray)",
            boxShadow:
              selectedPlan === "Arcade"
                ? "0 0 10px rgba(123, 97, 255, 0.5)"
                : "none",
          }}
        >
          <img src={data.iconArcade} alt="" />
          <div className="flex flex-col">
            <h1 className={h1Plans}>Arcade</h1>
            {yearly ? (
              <p className="text-[var(--colorCoolGray)]">$90/yr</p>
            ) : (
              <p className="text-[var(--colorCoolGray)]">$9/mo</p>
            )}
            {yearly && (
              <p className="text-[var(--colorPurplishBlue)] font-medium text-base">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div
          className={`${divPlans} cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105`}
          onClick={() => selecionar("Advanced")}
          style={{
            border:
              selectedPlan === "Advanced"
                ? "1px solid var(--colorPurplishBlue)"
                : "1px solid var(--colorLightGray)",
            boxShadow:
              selectedPlan === "Advanced"
                ? "0 0 10px rgba(123, 97, 255, 0.5)"
                : "none",
          }}
        >
          <img src={data.iconAdvanced} alt="" />
          <div className="flex flex-col">
            <h1 className={h1Plans}>Advanced</h1>
            {yearly ? (
              <p className="text-[var(--colorCoolGray)]">$120/yr</p>
            ) : (
              <p className="text-[var(--colorCoolGray)]">$12/mo</p>
            )}
            {yearly && (
              <p className="text-[var(--colorPurplishBlue)] font-medium text-base">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div
          className={`${divPlans} cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105`}
          onClick={() => selecionar("Pro")}
          style={{
            border:
              selectedPlan === "Pro"
                ? "1px solid var(--colorPurplishBlue)"
                : "1px solid var(--colorLightGray)",
            boxShadow:
              selectedPlan === "Pro"
                ? "0 0 10px rgba(123, 97, 255, 0.5)"
                : "none",
          }}
        >
          <img src={data.iconPro} alt="" />
          <div className="flex flex-col">
            <h1 className={h1Plans}>Pro</h1>
            {yearly ? (
              <p className="text-[var(--colorCoolGray)]">$150/yr</p>
            ) : (
              <p className="text-[var(--colorCoolGray)]">$15/mo</p>
            )}
            {yearly && (
              <p className="text-[var(--colorPurplishBlue)] font-medium text-base">
                2 months free
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 py-2 mt-5">
        <p
          className="font-bold text-lg transition-colors duration-500 ease-in-out"
          style={{
            color: yearly ? "var(--colorCoolGray)" : "var(--colorMarineBlue)",
          }}
        >
          Monthly
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
          Yearly
        </p>
      </div>
    </>
  );
}

export default Step2;
