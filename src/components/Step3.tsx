import { h1Class, pClass } from "../data/styles";
import { useState } from "react";
import { Checkbox, cn } from "@nextui-org/react";

function Step3() {
  const [isOnlineSelected, setIsOnlineSelected] = useState(false);
  const [isStorageSelected, setIsStorageSelected] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  return (
    <div>
      <h1 className={h1Class}>Pick add-ons</h1>
      <p className={pClass}>Add-ons help enhance your gaming experience</p>
      <div className="flex flex-col w-full justify-center gap-4">
        <Checkbox
          classNames={{
            base: cn(
              "inline-flex w-full max-w-md bg-content1 m-0",
              "hover:bg-content2 items-center justify-start px-5 py-3",
              "cursor-pointer rounded-lg gap-2 border border-[var(--colorLightGray)]",
              "data-[selected=true]:border-[var(--colorPurplishBlue)]"
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
          isSelected={isOnlineSelected}
          onValueChange={setIsOnlineSelected}
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col ">
              <h1 className="text-[var(--colorMarineBlue)] font-bold text-base">
                Online Service
              </h1>
              <p className="text-[var(--colorCoolGray)] text-sm">
                Acces to multiplayer games
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[var(--colorPurplishBlue)] font-medium text-sm">
                +$1/mo
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
              "data-[selected=true]:border-[var(--colorPurplishBlue)]"
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
          isSelected={isStorageSelected}
          onValueChange={setIsStorageSelected}
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
                +$2/mo
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
              "data-[selected=true]:border-[var(--colorPurplishBlue)]"
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
          isSelected={isProfile}
          onValueChange={setIsProfile}
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
                +$2/mo
              </p>
            </div>
          </div>
        </Checkbox>
      </div>
    </div>
  );
}

export default Step3;
