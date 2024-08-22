import { useState } from "react";
import { data } from "../data/data";
import { Switch, cn } from "@nextui-org/react";
import { h1Class, pClass, h1Plans, divPlans } from "../data/styles";

function Step2() {
  const [yearly, setYearly] = useState(false);

  const changeMode = () => {
    setYearly(!yearly);
  };

  return (
    <>
      <h1 className={h1Class}>Select your plan</h1>
      <p className={pClass}>You have the option of monthly or yearly billing</p>
      <div className="flex flex-col gap-3">
        <div className={divPlans}>
          <img src={data.iconArcade} alt="" />
          <div>
            <h1 className={h1Plans}>Arcade</h1>
            {yearly ? (
              <p className="text-[var(--colorCoolGray)]">$90/yr</p>
            ) : (
              <p className="text-[var(--colorCoolGray)]">$9/mo</p>
            )}
            {yearly && (
              <p className="text-[var(--colorMarineBlue)] font-medium text-sm">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div className={divPlans}>
          <img src={data.iconAdvanced} alt="" />
          <div>
            <h1 className={h1Plans}>Advanced</h1>
            {yearly ? (
              <p className="text-[var(--colorCoolGray)]">$120/yr</p>
            ) : (
              <p className="text-[var(--colorCoolGray)]">$12/mo</p>
            )}
            {yearly && (
              <p className="text-[var(--colorMarineBlue)] font-medium text-sm">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div className={divPlans}>
          <img src={data.iconPro} alt="" />
          <div>
            <h1 className={h1Plans}>Pro</h1>
            {yearly ? (
              <p className="text-[var(--colorCoolGray)]">$150/yr</p>
            ) : (
              <p className="text-[var(--colorCoolGray)]">$15/mo</p>
            )}
            {yearly && (
              <p className="text-[var(--colorMarineBlue)] font-medium text-sm">
                2 months free
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10 py-5 mt-5">
        <p className="font-bold text-[var(--colorMarineBlue)] text-lg">
          Monthly
        </p>
        <Switch
          checked={yearly}
          onChange={changeMode}
          classNames={{
            wrapper: cn(
              "bg-[var(--colorMarineBlue)]",
              "group-data-[selected=true]:bg-[var(--colorCoolGray)]",
              "group-data-[focus-visible=true]:ring-[var(--colorMarineBlue)]"
            ),
          }}
        />
        <p className="font-bold text-[var(--colorCoolGray)] text-lg">Yearly</p>
      </div>
    </>
  );
}

export default Step2;
