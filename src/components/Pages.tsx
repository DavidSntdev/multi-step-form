import { PagesClass } from "../data/styles";

interface PagesProps {
  activeStep: number;
}

function Pages({ activeStep }: PagesProps) {
  return (
    <div className="absolute top-0 left-0 right-0 flex gap-3 justify-center z-10 mt-4 py-5 font-bold">
      {[1, 2, 3, 4].map((btnNumber) => (
        <div
          key={btnNumber}
          className={PagesClass}
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
        >
          {btnNumber}
        </div>
      ))}
    </div>
  );
}

export default Pages;
