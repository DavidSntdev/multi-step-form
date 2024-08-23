import { h1Class, pClass } from "../data/styles";
import Checks from "./Checks";

function Step3() {
  return (
    <div>
      <h1 className={h1Class}>Pick add-ons</h1>
      <p className={pClass}>Add-ons help enhance your gaming experience</p>
      <Checks />
    </div>
  );
}

export default Step3;
