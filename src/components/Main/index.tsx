import { BsSliders, BsThreeDotsVertical } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";
import { Totals } from "../Totals";
import { Upgrade } from "../Upgrapde";
import { Balance } from "./Balance";
import { Buy } from "./Buy";
import { Chart } from "./Chart";

export const Main = () => {
  return (
    <section className="w-full">
      <header className="h-[12vh] flex justify-between p-5 relative items-center">
        <h1 className="text-2xl">
          Welcome back, <b>Sally</b>
        </h1>

        <nav className="flex items-center gap-4 h-full">
          <div className="bg-section h-14 w-[500px] rounded-lg flex items-center justify-between px-4 gap-4">
            <div className="w-full flex items-center gap-4">
              <FiSearch size={28} />
              <input
                type="text"
                className="w-full bg-transparent"
                placeholder="Search"
              />
            </div>
            <button>
              <BsSliders size={24} />
            </button>
          </div>
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
