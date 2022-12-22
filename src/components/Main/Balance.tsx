import { FaBeer } from "react-icons/fa";

export const Balance = () => (
  <article className="flex justify-center items-center">
    <div className="border-4  border-purple border-dashed rounded-full flex items-center justify-center">
      <div className="m-2 w-36 h-36 bg-purple rounded-full left-[50%] right-[50%]"></div>
    </div>

    <p>Total Balance</p>
    <b className="text-4xl">$15,453.06</b>
    <div className="[&>*]:bg-green [&>*]:rounded-full [&>*]:py-1 [&>*]:px-3 text-dark-gray text-xs flex gap-2 font-bold [&>*]:flex [&>*]:items-center [&>*]:justify-center">
      <div>+12.34%</div>
      <div>
        <FaBeer />
      </div>
    </div>
  </article>
);
