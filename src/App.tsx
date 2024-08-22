import { useState } from "react";
import { data } from "./data/data";
import Pages from "./components/Pages";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const goToNextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 4)); 
  };

  return (
    <main className="w-full h-screen relative bg-[var(--colorLightGray)]">
      <div className="relative">
        <img src={data.sidebarmobile} alt="" className="w-full" />
        <Pages activeStep={activeStep} />

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 w-11/12 bg-[var(--colorWhite)] rounded-xl p-8 mt-6 shadow-lg">
          {activeStep === 1 && <Step1 />}
          {activeStep === 2 && <Step2 />}
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={goToNextStep}
          className="bg-[var(--colorMarineBlue)] text-white px-5 py-2 rounded-md text-[var(--colorPastelBlue)] font-bold cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </main>
  );
}

export default App;
