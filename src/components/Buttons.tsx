import { buttonClass } from "../data/styles";

interface ButtonsProps {
  goToStep: (stepNumber: number) => void;
  activeStep: number;
}

function Buttons({ goToStep, activeStep }: ButtonsProps) {
  return (
    <div className="absolute top-0 left-0 right-0 flex gap-3 justify-center z-10 mt-4 py-5">
      {[1, 2, 3, 4].map((btnNumber) => (
        <button
          key={btnNumber}
          className={buttonClass}
          style={{
            backgroundColor:
              activeStep === btnNumber
                ? "var(--colorLightBlue)"
                : "transparent",
            color:
              activeStep === btnNumber
                ? "var(--colorMarineBlue)"
                : "var(--colorWhite)",
            borderColor:
              activeStep === btnNumber
                ? "var(--colorLightBlue)"
                : "var(--colorWhite)",
          }}
          onClick={() => goToStep(btnNumber)}
        >
          {btnNumber}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
