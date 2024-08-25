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
  isGringo: boolean;
}

function Step3({ billingMode, step3Data, setStep3Data, isGringo }: Step3Props) {
  return (
    <div>
      <h1 className={h1Class}>
        {isGringo ? "Pick add-ons" : "Adicione serviços"}
      </h1>
      <p className={pClass}>
        {isGringo
          ? "Add-ons help enhance your gaming experience"
          : "Os serviços ajudam a aprimorar sua experiência de jogo"}
      </p>
      <Checks
        billingMode={billingMode}
        step3Data={step3Data}
        setStep3Data={setStep3Data}
        isGringo={isGringo}
      />
    </div>
  );
}

export default Step3;
