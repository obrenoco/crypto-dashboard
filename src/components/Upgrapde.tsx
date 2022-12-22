import UpgradeBg from "../assets/images/upgrade-bg.png";

export const Upgrade = () => (
  <article className="h-[25%] bg-dark-purple flex flex-row justify-between gap-6">
    <div className="m-8 flex flex-col justify-center gap-4">
      <p className="text-3xl max-w-[500px] font-medium">
        Upgrade Your Plan to Premium and Get unlimited access
      </p>
      <button className="py-4 px-10 rounded-md bg-purple font-bold w-fit hover:bg-[#4542ff] duration-200">
        <span>Upgrade Now</span>
      </button>
    </div>
    <img src={UpgradeBg} className="h-full mix-blend-lighten mr-2" alt="" />
  </article>
);
