import { useState } from "react";
import { data } from "./data/data";
import Pages from "./components/Pages";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import { Button } from "@nextui-org/react";

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const goToNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 4));
  };
  const goToPrevStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <main className="w-full h-screen relative bg-[var(--colorMagnolia)]">
      <div className="relative">
        <img src={data.sidebarmobile} alt="" className="w-full" />
        <Pages activeStep={activeStep} />

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 w-11/12 bg-[var(--colorWhite)] rounded-xl p-8 mt-8 shadow-large shadow-[var(--colorLightBlue)]">
          {activeStep === 1 && <Step1 />}
          {activeStep === 2 && <Step2 />}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-20">
        <Button
          onClick={goToPrevStep}
          color="primary"
          variant="light"
          radius="sm"
          className="text-[var(--colorCoolGray)] font-bold px-5 py-2"
        >
          Go Back
        </Button>
      </div>
      <div className="absolute bottom-4 right-4 z-20">
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
    </main>
  );
}

export default App;
