import { BiWallet } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { FaBeer, FaCoins } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { HiSquares2X2 } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";

const iconSize = 30;
export const Sidebar = () => {
  return (
    <nav className="h-screen w-[5%] max-w-[300px] bg-[#131314] border-r-1/2  border-gray-800 flex flex-col justify-between text-lg items-center py-10">
      <div className="flex flex-col items-center">
        <button className="mb-6  text-3xl flex items-center gap-2 bg-green p-4 rounded-full">
          <FaCoins className="text-black" />
        </button>

        <ul className="text-white flex flex-col items-center [&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-4 ">
          <li className="hover:text-purple">
            <button className="bg-[#242427] rounded-md p-3">
              <HiSquares2X2 size={iconSize} />
            </button>
          </li>

          <li className="hover:text-purple">
            <button>
              <BiWallet size={iconSize} />
            </button>
          </li>

          <li className="hover:text-purple">
            <button>
              <VscGraph size={iconSize} />
            </button>
          </li>
        </ul>
      </div>

      <div>
        <ul className="[&>li]:flex [&>li]:flex-row [&>li]:gap-4 [&>li]:items-center">
          <li className="hover:text-purple">
            <button>
              <BsFillGearFill size={iconSize} />
            </button>
          </li>

          <li className="hover:text-purple">
            <button>
              <FiUsers size={iconSize} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
