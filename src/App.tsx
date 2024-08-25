import { useState } from "react";
import { data } from "./data/data";
import { Button } from "@nextui-org/react";
import { validateStep1 } from "./components/utils/validateStep1";
import { Step1Data, Step2Data, Step3Data } from "./components/utils/interfaces";
import Pages from "./components/Pages";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Confirm from "./components/Confirm";

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
    if (activeStep === 1 && !validateStep1(step1Data)) {
      return;
    }
    setActiveStep((prevStep) => Math.min(prevStep + 1, 5));
  };

  const goToPrevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <main className="w-full h-auto pb-10 bg-[var(--colorMagnolia)] lg:bg-[var(--colorWhite)] lg:shadow-large lg:shadow-[var(--colorLightBlue)] lg:flex lg:p-5 lg:pb-5 lg:rounded-xl lg:w-[1000px]">
      <picture className="w-full lg:w-[30%] relative z-0 ">
        <source media="(min-width: 1024px)" srcSet={data.sidebardesktop} />
        <img src={data.sidebarmobile} alt="" className="w-full" />
        <Pages activeStep={activeStep} />
      </picture>

      <div className="lg:flex lg:flex-col lg:place-center lg:w-[70%]">
        <div className="flex justify-center z-10 mt-[-190px] lg:mt-0">
          <div className="bg-[var(--colorWhite)] rounded-xl p-8 mt-28 w-11/12 shadow-large shadow-[var(--colorLightBlue)] lg:shadow-none static z-20 lg:mt-0 md:mt-[-70px]">
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
            {activeStep === 5 && <Confirm />}
          </div>
        </div>
        <div className="flex justify-between items-end bg-[var(--colorMagnolia)] lg:bg-[var(--colorWhite)] px-5 pt-16 lg:px-16 lg:pt-8 lg:h-2/3">
          <div>
            {activeStep === 5 || activeStep === 1 ? (
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
            {activeStep === 5 ? (
              <></>
            ) : activeStep === 4 ? (
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
                disabled={
                  (activeStep === 1 && !validateStep1(step1Data)) ||
                  (activeStep === 2 && !step2Data.escolha) ||
                  (activeStep === 3 &&
                    !(
                      step3Data.isOnlineSelected ||
                      step3Data.isProfile ||
                      step3Data.isStorageSelected
                    ))
                }
                color="primary"
                variant="faded"
                radius="sm"
                className={`text-[var(--colorPastelBlue)] font-bold px-5 py-5 ${
                  (activeStep === 1 && validateStep1(step1Data)) ||
                  (activeStep === 2 && step2Data.escolha) ||
                  (activeStep === 3 &&
                    (step3Data.isOnlineSelected ||
                      step3Data.isProfile ||
                      step3Data.isStorageSelected))
                    ? "bg-[var(--colorMarineBlue)]"
                    : "bg-gray-400 cursor-not-allowed"
                } text-base data-[focus-visible=true]:outline-[var(--colorMarineBlue)]`}
              >
                Next Step
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
