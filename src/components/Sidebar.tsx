import { BiWallet } from "react-icons/bi";
import { FaBeer } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiSquares2X2 } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";

const iconSize = 30;
export const Sidebar = () => {
  return (
    <nav className="h-screen w-[5%] max-w-[300px] bg-[#131314] border-r-1/2  border-gray-800 flex flex-col justify-between p-8 text-lg">
      <div>
        <button className="mb-6 font-black text-3xl flex items-center gap-2">
          <FaBeer className="text-purple" />
        </button>

        <ul className="text-white [&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-4 ">
          <li className="hover:text-purple">
            <HiSquares2X2 size={iconSize} />
          </li>

          <li className="hover:text-purple">
            <BiWallet size={iconSize} />
          </li>

          <li className="hover:text-purple">
            <VscGraph size={iconSize} />
          </li>

          <li className="hover:text-purple">
            <FiUsers size={iconSize} />
          </li>
        </ul>
      </div>

      <div>
        <ul className="[&>li]:flex [&>li]:flex-row [&>li]:gap-4 [&>li]:items-center">
          <li className="hover:text-purple">
            <FaBeer size={iconSize} />
          </li>

          <li className="hover:text-purple">
            <FaBeer size={iconSize} />
          </li>
        </ul>
      </div>
    </nav>
  );
};
