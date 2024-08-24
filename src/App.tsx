import { useState } from "react";
import { data } from "./data/data";
import { Button } from "@nextui-org/react";
import Pages from "./components/Pages";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

interface Step1Data {
  name: string;
  email: string;
  phoneNumber: string;
}

interface Step2Data {
  escolha: string;
  mensal: boolean;
}

interface Step3Data {
  isOnlineSelected: boolean;
  isStorageSelected: boolean;
  isProfile: boolean;
}

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [step1Data, setStep1Data] = useState<Step1Data>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [step2Data, setStep2Data] = useState<Step2Data>({
    escolha: "",
    mensal: false,
  });
  const [step3Data, setStep3Data] = useState<Step3Data>({
    isOnlineSelected: false,
    isStorageSelected: false,
    isProfile: false,
  });

  const goToNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const goToPrevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <main className="w-full h-auto pb-10 bg-[var(--colorMagnolia)]">
      <img src={data.sidebarmobile} alt="" className="w-full absolute z-0" />
      <div className="flex justify-center z-10 static">
        <Pages activeStep={activeStep} />

        <div className="bg-[var(--colorWhite)] rounded-xl p-8 mt-28 w-11/12 shadow-large shadow-[var(--colorLightBlue)] static z-20">
          {activeStep === 1 && (
            <Step1 step1Data={step1Data} setStep1Data={setStep1Data} />
          )}
          {activeStep === 2 && (
            <Step2 Step2Data={step2Data} setStep2Data={setStep2Data} />
          )}
          {activeStep === 3 && (
            <Step3
              billingMode={step2Data.mensal}
              step3Data={step3Data}
              setStep3Data={setStep3Data}
            />
          )}
          {activeStep === 4 && (
            <Step4
              step2Data={step2Data}
              step3Data={step3Data}
              onChangeStep={() => setActiveStep(2)}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between items-end bg-[var(--colorMagnolia)] px-5 pt-16">
        <div>
          {activeStep === 1 ? (
            <></>
          ) : (
            <Button
              onClick={goToPrevStep}
              color="primary"
              variant="light"
              radius="sm"
              className="text-[var(--colorCoolGray)] font-bold px-5 py-2 data-[hover=true]:bg-slate-300 data-[focus-visible=true]:outline-[var(--colorMarineBlue)]"
            >
              Go Back
            </Button>
          )}
        </div>
        <div>
          {activeStep === 4 ? (
            <Button
              onClick={goToNextStep}
              color="primary"
              variant="faded"
              radius="sm"
              className="text-[var(--colorPastelBlue)] font-bold px-5 py-5 bg-[var(--colorPurplishBlue)] text-base data-[focus-visible=true]:outline-[var(--colorMarineBlue)]"
            >
              Confirm
            </Button>
          ) : (
            <Button
              onClick={goToNextStep}
              color="primary"
              variant="faded"
              radius="sm"
              className="text-[var(--colorPastelBlue)] font-bold px-5 py-5 bg-[var(--colorMarineBlue)] text-base data-[focus-visible=true]:outline-[var(--colorMarineBlue)]"
            >
              Next Step
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
