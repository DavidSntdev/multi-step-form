import { useState } from "react";
import { data } from "./data/data";
import { Button } from "@nextui-org/react";
import Pages from "./components/Pages";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/step3";
import Step4 from "./components/Step4";

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

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
          {activeStep === 1 && <Step1 />}
          {activeStep === 2 && <Step2 />}
          {activeStep === 3 && <Step3 />}
          {activeStep === 4 && <Step4 />}
        </div>
      </div>
      <div className="flex justify-between items-end bg-[var(--colorMagnolia)] px-5 pt-16">
        <div className="static z-20">
          <Button
            onClick={goToPrevStep}
            color="primary"
            variant="light"
            radius="sm"
            className="text-[var(--colorCoolGray)] font-bold px-5 py-2 data-[hover=true]:bg-slate-300"
          >
            Go Back
          </Button>
        </div>
        <div className="static z-20">
          <Button
            onClick={goToNextStep}
            color="primary"
            variant="faded"
            radius="sm"
            className="text-[var(--colorPastelBlue)] font-bold px-5 py-5 bg-[var(--colorMarineBlue)]"
          >
            Next Step
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
