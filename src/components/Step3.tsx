import { h1Class, pClass } from "../data/styles";
import Checks from "./Checks";

interface Step3Props {
  billingMode: boolean;
  step3Data: {
    isOnlineSelected: boolean;
    isStorageSelected: boolean;
    isProfile: boolean;
  };
  setStep3Data: React.Dispatch<
    React.SetStateAction<{
      isOnlineSelected: boolean;
      isStorageSelected: boolean;
      isProfile: boolean;
    }>
  >;
}

function Step3({ billingMode, step3Data, setStep3Data }: Step3Props) {
  return (
    <div>
      <h1 className={h1Class}>Pick add-ons</h1>
      <p className={pClass}>Add-ons help enhance your gaming experience</p>
      <Checks
        billingMode={billingMode}
        step3Data={step3Data}
        setStep3Data={setStep3Data}
      />
    </div>
  );
}

export default Step3;
