import { FaBeer } from "react-icons/fa";

export const Totals = () => (
  <article className="h-[25%] bg-section mt-4 ">
    <ul className="flex gap-4 h-full   [&>li]:w-full [&>li]:h-full bg-dark-gray [&>li]:rounded-lg [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:justify-center [&>li]:relative">
      <li className="bg-green text-dark-gray">
        <div className="bg-green w-12 h-12 absolute top-0 rounded-full -mt-6 flex items-center justify-center">
          <FaBeer className="text-dark-gray" size={22} />
        </div>

        <b className="text-4xl">$1.234</b>
        <b className="text-xs mt-1">Total assepts</b>
      </li>
      <li className="bg-section ">
        <div className="bg-section w-12 h-12 absolute top-0 rounded-full -mt-6 flex items-center justify-center">
          <FaBeer size={22} />
        </div>

        <b className="text-4xl">$1.234</b>
        <b className="text-xs mt-1">Total assepts</b>
      </li>
      <li className="bg-section ">
        <div className="bg-section w-12 h-12 absolute top-0 rounded-full -mt-6 flex items-center justify-center">
          <FaBeer size={22} />
        </div>

        <b className="text-4xl">$1.234</b>
        <b className="text-xs mt-1">Total assepts</b>
      </li>
    </ul>
  </article>
);
