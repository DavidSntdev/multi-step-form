import { h1Class, pClass, divPlans, h1Plans } from "../data/styles";
import { data } from "../data/data";
import {useState} from 'react';

function Step2() {
  const [yearly, setYearly] = useState(false)
  return (
    <>
      <h1 className={h1Class}>Select your plan</h1>
      <p className={pClass}>You have the option of monthly or yearly biling</p>
      <div className="flex flex-col gap-3">
        <div className={divPlans}>
          <img src={data.iconArcade} alt="" />
          <div>
            <h1 className={h1Plans}>Arcade</h1>
            <p className="text-[var(--colorCoolGray)]">$90/yr</p>
            {yearly && <p className="text-[var(--colorMarineBlue)] font-medium text-sm">
              2 months free
            </p>}
          </div>
        </div>
        <div className={divPlans}>
          <img src={data.iconAdvanced} alt="" />
          <div>
            <h1 className={h1Plans}>Advanced</h1>
            <p className="text-[var(--colorCoolGray)]">$120/yr</p>
            <p className="text-[var(--colorMarineBlue)] font-medium text-sm">
              2 months free
            </p>
          </div>
        </div>
        <div className={divPlans}>
          <img src={data.iconPro} alt="" />
          <div>
            <h1 className={h1Plans}>Pro</h1>
            <p className="text-[var(--colorCoolGray)]">$150/yr</p>
            <p className="text-[var(--colorMarineBlue)] font-medium text-sm">
              2 months free
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2;
