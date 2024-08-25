// Step4.tsx
import { h1Class, pClass } from "../data/styles";

interface Step4Props {
  step2Data: {
    escolha: string;
    mensal: boolean;
  };
  step3Data: {
    isOnlineSelected: boolean;
    isStorageSelected: boolean;
    isProfile: boolean;
  };
  onChangeStep: () => void;
  isGringo: boolean;
}

function Step4({ step2Data, step3Data, onChangeStep, isGringo }: Step4Props) {
  const { escolha, mensal } = step2Data;
  const { isOnlineSelected, isStorageSelected, isProfile } = step3Data;

  const monthlyPrice =
    escolha === "Arcade" ? 9 : escolha === "Advanced" ? 12 : 15;
  const yearlyPrice =
    escolha === "Arcade" ? 90 : escolha === "Advanced" ? 120 : 150;
  const basePrice = mensal ? yearlyPrice : monthlyPrice;

  const onlinePrice = mensal ? 10 : 1;
  const storagePrice = mensal ? 20 : 2;
  const profilePrice = mensal ? 20 : 2;

  const addOnsTotal =
    (isOnlineSelected ? onlinePrice : 0) +
    (isStorageSelected ? storagePrice : 0) +
    (isProfile ? profilePrice : 0);

  const totalPrice = basePrice + addOnsTotal;

  return (
    <div>
      <h1 className={h1Class}>{isGringo ? "Finishing up" : "Finalização"}</h1>
      <p className={pClass}>
        {isGringo
          ? "Double-check everything looks OK before confirming"
          : "Verifique novamente se tudo está bem antes de confirmar"}
      </p>
      <div className="flex flex-col p-5 bg-[var(--colorMagnolia)] rounded-md font-bold">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-[--colorMarineBlue]">
              {isGringo
                ? escolha
                : escolha === "Arcade"
                ? "Basico"
                : escolha === "Advanced"
                ? "Avançado"
                : "Profissional"}{" "}
              (
              {mensal
                ? isGringo
                  ? "Yearly"
                  : "Anual"
                : isGringo
                ? "Monthly"
                : "Mensal"}
              )
            </h1>
            <p
              className="underline cursor-pointer text-[--colorCoolGray] hover:text-[var(--colorPurplishBlue)]"
              onClick={onChangeStep}
            >
              {isGringo ? "Change" : "Trocar"}
            </p>
          </div>
          <div className="text-[--colorPurplishBlue]">
            +${basePrice}/
            {mensal ? (isGringo ? "yr" : "ano") : isGringo ? "mo" : "mês"}
          </div>
        </div>
        <hr className="border-t border-[--colorLightGray] w-full mx-auto my-4" />
        <div className="flex flex-col text-[--colorCoolGray] gap-1">
          <div className="flex justify-between">
            {isOnlineSelected && (
              <p>{isGringo ? "Online Service" : "Serviço on-line"}</p>
            )}
            {isOnlineSelected && (
              <p className="text-[--colorPurplishBlue]">
                +${onlinePrice}/
                {mensal ? (isGringo ? "yr" : "ano") : isGringo ? "mo" : "mês"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            {isStorageSelected && (
              <p>{isGringo ? "Large Storage" : "Armazenamento maior"}</p>
            )}
            {isStorageSelected && (
              <p className="text-[--colorPurplishBlue]">
                +${storagePrice}/
                {mensal ? (isGringo ? "yr" : "ano") : isGringo ? "mo" : "mês"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            {isProfile && (
              <p>
                {isGringo ? "Customizable Profile" : "Perfil personalizável"}
              </p>
            )}
            {isProfile && (
              <p className="text-[--colorPurplishBlue]">
                +${profilePrice}/
                {mensal ? (isGringo ? "yr" : "ano") : isGringo ? "mo" : "mês"}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between pt-5 px-5 font-bold">
        <p className="text-[--colorCoolGray]">
          Total (
          {mensal
            ? isGringo
              ? "per year"
              : "por ano"
            : isGringo
            ? "per month"
            : "por mês"}
          )
        </p>
        <p className="text-[--colorPurplishBlue]">
          ${totalPrice}/
          {mensal ? (isGringo ? "yr" : "ano") : isGringo ? "mo" : "mês"}
        </p>
      </div>
    </div>
  );
}

export default Step4;
