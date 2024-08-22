import {
  h1Class,
  pClass,
  labelStep1,
  inputStep1,
  divForm,
} from "../data/styles";

function Step1() {
  return (
    <>
      <h1 className={h1Class}>Personal Info</h1>
      <p className={pClass}>
        Please provide your name, email address, and phone number.
      </p>
      <form action="" className="flex flex-col gap-4">
        <div className={divForm}>
          <label htmlFor="name" className={labelStep1}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className={inputStep1}
          />
        </div>
        <div className={divForm}>
          <label htmlFor="email" className={labelStep1}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className={inputStep1}
          />
        </div>
        <div className={divForm}>
          <label htmlFor="number" className={labelStep1}>
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="e.g. + 1 234 567 890"
            className={inputStep1}
          />
        </div>
      </form>
    </>
  );
}

export default Step1;
