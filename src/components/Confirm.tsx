import { data } from "../data/data";

function Confirm() {
  return (
    <div className="py-10 px-2 flex flex-col justify-center items-center gap-3">
      <img src={data.iconTy} alt="" />
      <h1 className="font-bold text-[var(--colorMarineBlue)] text-3xl">
        Thank you!
      </h1>
      <p className="text-center font-bold text-[var(--colorCoolGray)]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Confirm;
