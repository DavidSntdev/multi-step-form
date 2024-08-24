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
}

function Step4({ step2Data, step3Data, onChangeStep }: Step4Props) {
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
      <h1 className={h1Class}>Finishing up</h1>
      <p className={pClass}>
        Double-check everything looks OK before confirming
      </p>
      <div className="flex flex-col p-5 bg-[var(--colorMagnolia)] rounded-md font-bold">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-[--colorMarineBlue]">
              {escolha} ({mensal ? "Yearly" : "Monthly"})
            </h1>
            <p
              className="underline cursor-pointer text-[--colorCoolGray]"
              onClick={onChangeStep}
            >
              Change
            </p>
          </div>
          <div className="text-[--colorPurplishBlue]">
            +${basePrice}/{mensal ? "yr" : "mo"}
          </div>
        </div>
        <hr className="border-t border-[--colorLightGray] w-full mx-auto my-4" />
        <div className="flex flex-col text-[--colorCoolGray] gap-1">
          <div className="flex justify-between">
            {isOnlineSelected && <p>Online Service</p>}
            {isOnlineSelected && (
              <p className="text-[--colorPurplishBlue]">
                +${onlinePrice}/{mensal ? "yr" : "mo"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            {isStorageSelected && <p>Large Storage</p>}
            {isStorageSelected && (
              <p className="text-[--colorPurplishBlue]">
                +${storagePrice}/{mensal ? "yr" : "mo"}
              </p>
            )}
          </div>
          <div className="flex justify-between">
            {isProfile && <p>Customizable Profile</p>}
            {isProfile && (
              <p className="text-[--colorPurplishBlue]">
                +${profilePrice}/{mensal ? "yr" : "mo"}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between pt-5 px-5 font-bold">
        <p className="text-[--colorCoolGray]">
          Total ({mensal ? "per year" : "per month"})
        </p>
        <p className="text-[--colorPurplishBlue]">
          ${totalPrice}/{mensal ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
}

export default Step4;
