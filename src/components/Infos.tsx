import { Step1Data, Step2Data, Step3Data } from "./utils/interfaces";
interface InfosProps {
  step1Data: Step1Data;
  step2Data: Step2Data;
  step3Data: Step3Data;
}

function Infos({ step1Data, step2Data, step3Data }: InfosProps) {
  return (
    <div className="p-8 bg-[var(--colorWhite)] rounded-xl shadow-large shadow-[var(--colorLightBlue)]">
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <p>
          <strong>Name:</strong> {step1Data.name}
        </p>
        <p>
          <strong>Email:</strong> {step1Data.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {step1Data.phoneNumber}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Plan Selection</h3>
        <p>
          <strong>Choice:</strong> {step2Data.escolha}
        </p>
        <p>
          <strong>Monthly:</strong> {step2Data.mensal ? "Yes" : "No"}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Add-Ons</h3>
        <p>
          <strong>Online Storage:</strong>{" "}
          {step3Data.isOnlineSelected ? "Included" : "Not Included"}
        </p>
        <p>
          <strong>Profile:</strong>{" "}
          {step3Data.isProfile ? "Included" : "Not Included"}
        </p>
        <p>
          <strong>Extra Storage:</strong>{" "}
          {step3Data.isStorageSelected ? "Included" : "Not Included"}
        </p>
      </div>
    </div>
  );
}

export default Infos;
