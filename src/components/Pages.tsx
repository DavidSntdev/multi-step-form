import { PagesClass } from "../data/styles";

interface PagesProps {
  activeStep: number;
  isGringo: boolean;
}

function Pages({ activeStep, isGringo }: PagesProps) {
  return (
    <div className="absolute top-4 left-0 right-0 lg:top-0 lg:left-1/2 lg:translate-x-[-55%] flex gap-3 justify-center z-10 py-5 font-bold lg:flex-col lg:w-[210px] lg:py-10">
      {[1, 2, 3, 4].map((btnNumber) => (
        <div className="lg:flex lg:flex-row lg:gap-3 lg:items-center">
          <div
            key={btnNumber}
            className={`${PagesClass} transition-all duration-300 ease-in-out `}
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
          {btnNumber === 1 && (
            <div className="hidden lg:flex lg:flex-col">
              <p className="text-[--colorPastelBlue] font-normal text-sm">
                {isGringo ? "STEP 1" : "ETAPA 1"}
              </p>
              <p className="text-[--colorMagnolia]">
                {isGringo ? "YOUR INFOS" : "SUAS INFOS"}
              </p>
            </div>
          )}
          {btnNumber === 2 && (
            <div className="hidden lg:flex lg:flex-col lg:w-auto">
              <p className="text-[--colorPastelBlue] font-normal text-sm">
                {isGringo ? "STEP 2" : "ETAPA 2"}
              </p>
              <p className="text-[--colorMagnolia]">
                {isGringo ? "SELECT PLAN" : "SELECIONAR PLANO"}
              </p>
            </div>
          )}
          {btnNumber === 3 && (
            <div className="hidden lg:flex lg:flex-col">
              <p className="text-[--colorPastelBlue] font-normal text-sm">
                {isGringo ? "STEP 3" : "ETAPA 3"}
              </p>
              <p className="text-[--colorMagnolia]">
                {isGringo ? "ADD-ONS" : "SERVIÇOS"}
              </p>
            </div>
          )}
          {btnNumber === 4 && (
            <div className="hidden lg:flex lg:flex-col">
              <p className="text-[--colorPastelBlue] font-normal text-sm">
                {isGringo ? "STEP 4" : "ETAPA 4"}
              </p>
              <p className="text-[--colorMagnolia]">
                {isGringo ? "SUMMARY" : "RESUMO"}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pages;
