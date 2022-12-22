import { FaBeer } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <nav className="h-screen w-[30%] max-w-[300px] border-r-1/2  border-gray-800  flex flex-col justify-between px-12 py-8 text-lg">
      <div>
        <button className="mb-6 font-black text-3xl flex items-center gap-2">
          <FaBeer className="text-purple" />
          <span>Cryptos</span>
        </button>

        <ul className=" [&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-4 ">
          <li className="hover:text-purple">
            <FaBeer />
            <button>Trade</button>
          </li>

          <li className="hover:text-purple">
            <FaBeer />
            <button>Wallet</button>
          </li>

          <li className="hover:text-purple">
            <FaBeer />
            <button>Analytics</button>
          </li>

          <li className="hover:text-purple">
            <FaBeer />
            <button>Community</button>
          </li>

          <li className="hover:text-purple">
            <FaBeer />
            <button>Message</button>
          </li>
        </ul>
      </div>

      <div>
        <ul className="[&>li]:flex [&>li]:flex-row [&>li]:gap-4 [&>li]:items-center">
          <li className="hover:text-purple">
            <FaBeer />
            <button>Support</button>
          </li>

          <li className="hover:text-purple">
            <FaBeer />
            <button>Settings</button>
          </li>

          <li className="mt-16">
            <FaBeer />
            <div>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </div>
          </li>

          <li className="text-gray-400 hover:text-purple">
            <FaBeer />
            <button>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
