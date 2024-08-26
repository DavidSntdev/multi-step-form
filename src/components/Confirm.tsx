import { data } from "../data/data";

interface ConfirmProps {
  isGringo: boolean;
}

function Confirm({ isGringo }: ConfirmProps) {
  return (
    <div className="py-10 px-2 flex flex-col justify-center items-center gap-3">
      <img src={data.iconTy} alt="" />
      <h1 className="font-bold text-[var(--colorMarineBlue)] text-3xl">
        {isGringo ? "Thank you!" : "Obrigado"}
      </h1>
      <p className="text-center font-bold text-[var(--colorCoolGray)]">
        {isGringo
          ? "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          : "Obrigado por confirmar sua assinatura! Esperamos que você se divirta usando nossa plataforma. Se precisar de suporte, sinta-se à vontade para nos enviar um e-mail para support@loremgaming.com."}
      </p>
    </div>
  );
}

export default Confirm;
