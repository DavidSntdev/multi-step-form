import { h1Class, pClass } from "../data/styles";
import Checks from "./Checks";

interface Step3Props {
  billingMode: boolean; 
}

function Step3({ billingMode }: Step3Props) {
  return (
    <div>
      <h1 className={h1Class}>Pick add-ons</h1>
      <p className={pClass}>Add-ons help enhance your gaming experience</p>
      <Checks billingMode={billingMode} />
    </div>
  );
}

export default Step3;
