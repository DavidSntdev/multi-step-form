import { Checkbox, cn } from "@nextui-org/react";

interface ChecksProps {
  billingMode: boolean;
  step3Data: {
    isOnlineSelected: boolean;
    isStorageSelected: boolean;
    isProfile: boolean;
  };
  setStep3Data: React.Dispatch<
    React.SetStateAction<{
      isOnlineSelected: boolean;
      isStorageSelected: boolean;
      isProfile: boolean;
    }>
  >;
}

function Checks({ billingMode, step3Data, setStep3Data }: ChecksProps) {
  return (
    <div className="flex flex-col w-full justify-center gap-4 lg:items-center">
      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full max-w-md bg-content1 m-0",
            "hover:bg-content2 items-center justify-start px-5 py-3",
            "cursor-pointer rounded-lg gap-2 border border-[var(--colorLightGray)]",
            "transition-colors duration-400 ease-in-out",
            "data-[selected=true]:border-[var(--colorPurplishBlue)]",
            "data-[selected=true]:shadow-[0px_0px_15px_rgba(123,97,255,0.5)]",
            "data-[selected=true]:bg-[var(--colorMagnolia)]"
          ),
          label: ["w-full"],
          wrapper: [
            "group-data-[hover=true]:before:bg-[var(--colorPurplishBlue)]",
            "after:bg-[var(--colorPurplishBlue)]",
            "group-data-[focus-visible=true]:border-[var(--colorPurplishBlue)]",
            "group-data-[focus-visible=true]:ring-[var(--colorPurplishBlue)]",
            "rounded-md",
          ],
        }}
        isSelected={step3Data.isOnlineSelected}
        onValueChange={(isSelected) =>
          setStep3Data((prev) => ({ ...prev, isOnlineSelected: isSelected }))
        }
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-[var(--colorMarineBlue)] font-bold text-base">
              Online Service
            </h1>
            <p className="text-[var(--colorCoolGray)] text-sm">
              Access to multiplayer games
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[var(--colorPurplishBlue)] font-medium text-sm">
              {billingMode ? "+$10/yr" : "+$1/mo"}
            </p>
          </div>
        </div>
      </Checkbox>

      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full max-w-md bg-content1 m-0",
            "hover:bg-content2 items-center justify-start px-5 py-3",
            "cursor-pointer rounded-lg gap-2 border border-[var(--colorLightGray)]",
            "transition-colors duration-400 ease-in-out",
            "data-[selected=true]:border-[var(--colorPurplishBlue)]",
            "data-[selected=true]:shadow-[0px_0px_15px_rgba(123,97,255,0.5)]",
            "data-[selected=true]:bg-[var(--colorMagnolia)]"
          ),
          label: "w-full",
          wrapper: [
            "group-data-[hover=true]:before:bg-[var(--colorPurplishBlue)]",
            "after:bg-[var(--colorPurplishBlue)]",
            "group-data-[focus-visible=true]:border-[var(--colorPurplishBlue)]",
            "group-data-[focus-visible=true]:ring-[var(--colorPurplishBlue)]",
            "rounded-md",
          ],
        }}
        isSelected={step3Data.isStorageSelected}
        onValueChange={(isSelected) =>
          setStep3Data((prev) => ({ ...prev, isStorageSelected: isSelected }))
        }
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-[var(--colorMarineBlue)] font-bold text-base">
              Larger storage
            </h1>
            <p className="text-[var(--colorCoolGray)] text-sm">
              Extra 1TB of cloud save
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[var(--colorPurplishBlue)] font-medium text-sm">
              {billingMode ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>
        </div>
      </Checkbox>

      <Checkbox
        classNames={{
          base: cn(
            "inline-flex w-full max-w-md bg-content1 m-0",
            "hover:bg-content2 items-center justify-start px-5 py-3",
            "cursor-pointer rounded-lg gap-2 border border-[var(--colorLightGray)]",
            "transition-colors duration-400 ease-in-out",
            "data-[selected=true]:border-[var(--colorPurplishBlue)]",
            "data-[selected=true]:shadow-[0px_0px_15px_rgba(123,97,255,0.5)]",
            "data-[selected=true]:bg-[var(--colorMagnolia)]"
          ),
          label: "w-full",
          wrapper: [
            "group-data-[hover=true]:before:bg-[var(--colorPurplishBlue)]",
            "after:bg-[var(--colorPurplishBlue)]",
            "group-data-[focus-visible=true]:border-[var(--colorPurplishBlue)]",
            "group-data-[focus-visible=true]:ring-[var(--colorPurplishBlue)]",
            "rounded-md",
          ],
        }}
        isSelected={step3Data.isProfile}
        onValueChange={(isSelected) =>
          setStep3Data((prev) => ({ ...prev, isProfile: isSelected }))
        }
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-[var(--colorMarineBlue)] font-bold text-base">
              Customizable profile
            </h1>
            <p className="text-[var(--colorCoolGray)] text-sm">
              Custom theme on your profile
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[var(--colorPurplishBlue)] font-medium text-sm">
              {billingMode ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>
        </div>
      </Checkbox>
    </div>
  );
}

export default Checks;
