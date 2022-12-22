import { FaBeer } from "react-icons/fa";
import UpgradeBg from "../../assets/images/upgrade-bg.png";

import { BsThreeDotsVertical } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { Upgrade } from "../Upgrapde";
import { Totals } from "../Totals";
import { Chart } from "./Chart";
import { Balance } from "./Balance";
import { Buy } from "./Buy";

export const Main = () => {
  return (
    <section className="w-full">
      <header className="h-[12vh] flex justify-between p-10 relative">
        <h1 className="text-2xl">
          Welcome back, <b>Sally</b>
        </h1>

        <nav className="flex items-center gap-4">
          <VscBellDot size={24} />
          <div className="w-8 h-8 rounded-full bg-purple ml-2"></div>
          <BsThreeDotsVertical size={24} />

          <img src="" alt="" />
        </nav>
      </header>

      <main className="h-[88vh] w-full flex px-5 pb-5 [&>section]:flex [&>section]:flex-col [&>section]:gap-6 gap-6">
        <section className="w-[70%] [&>article]:w-full  [&>article]:rounded-xl">
          <Upgrade />

          <Totals />

          <Chart />
        </section>

        <section className="w-[30%]  [&>article]:bg-section [&>article]:w-full  [&>article]:rounded-lg pl-0 [&>article]:h-[50%] [&>article]:flex [&>article]:flex-col  [&>article]:gap-4">
          <Balance />
          <Buy />
        </section>
      </main>
    </section>
  );
};
