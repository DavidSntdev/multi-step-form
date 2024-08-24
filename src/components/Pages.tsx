import { PagesClass } from "../data/styles";

interface PagesProps {
  activeStep: number;
}

function Pages({ activeStep }: PagesProps) {
  return (
    <div className="absolute top-4 left-0 right-0 lg:top-0 lg:left-1/2 lg:translate-x-[-80%] flex gap-3 justify-center z-10 py-5 font-bold lg:flex-col">
      {[1, 2, 3, 4].map((btnNumber) => (
        <div
          key={btnNumber}
          className={`${PagesClass} transition-all duration-300 ease-in-out`}
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
            transition:
              "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
          }}
        >
          {btnNumber}
        </div>
      ))}
    </div>
  );
}

export default Pages;
