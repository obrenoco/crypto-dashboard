import { FaStar } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { formatedNumber } from "../../utils/numberFormat";
import ApexCharts from "apexcharts";

type Data = {
  from: string;
  to: string;
  amount: number;
  high: number;
  low: number;
  gainsPercentual: number;
}[];

const filteredData: Data = [
  {
    from: "btc",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: 4.65,
  },
  {
    from: "eth",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: -4.65,
  },
  {
    from: "eth",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: -4.65,
  },
  {
    from: "eth",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: -4.65,
  },
  {
    from: "eth",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: -4.65,
  },
  {
    from: "eth",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: -4.65,
  },
  {
    from: "eth",
    to: "busd",
    amount: 33999,
    high: 57.39,
    low: 49.23,
    gainsPercentual: -4.65,
  },
];
export const Search = () => {
  const A = filteredData.map((x) => {
    return (
      <li className="font-bold rounded-md overflow-hidden">
        <button className="w-full text-left [&>*]:p-5">
          <div className="bg-[#343435] text-xl">
            <p className="uppercase">
              {x.from}
              <span className="text-gray-400">/{x.to}</span>
            </p>
            <p>{formatedNumber(x.amount)}</p>
          </div>
          <div className="bg-[#252527] text-sm flex gap-6">
            <div>
              <p className="text-gray-400">24H Low</p>
              <p>{formatedNumber(x.high)}</p>
            </div>
            <div>
              <p className="text-gray-400 ">24H High</p>
              <p>{formatedNumber(x.low)}</p>
            </div>
          </div>
          <div
            className={`${
              x.gainsPercentual > 0
                ? "bg-[#373A34] text-[#D8F5A7]"
                : "bg-[#342726] text-[#E67159]"
            } text-xl flex items-center gap-2`}
          >
            <p>{formatedNumber(x.gainsPercentual)}%</p>
            {x.gainsPercentual > 0 ? (
              <HiArrowTrendingUp />
            ) : (
              <HiArrowTrendingDown />
            )}
          </div>
        </button>
      </li>
    );
  });

  return (
    <section className="w-[30%] bg-[#181819]  [&>article]:w-full  [&>article]:rounded-lg pl-0 [&>article]:flex [&>article]:flex-col  [&>article]:gap-4">
      <header className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl">Exchange</h1>
        </div>

        <div className="flex gap-2 w-full text-sm font-bold [&>*]:transition-colors [&>*]:duration-200 [&>*]:py-1 [&>*]:px-4 [&>*]:rounded-full  [&>*]:border-2 [&>*]:border-gray-500 [&>*]:w-full ">
          <button className="hover:bg-white hover:text-black  hover:border-white w-fit flex items-center gap-2">
            <FaStar />
            <span>Fav</span>
          </button>
          <button className="hover:bg-white hover:text-black  hover:border-white">
            BTC
          </button>
          <button className="hover:bg-white hover:border-white hover:text-black">
            BUST
          </button>
          <button className="hover:bg-white hover:border-white hover:text-black">
            BNB
          </button>
          <button className="hover:bg-white hover:border-white hover:text-black">
            FIAT
          </button>
        </div>
        <div className="w-full rounded-md h-14  flex items-center gap-4 justify-between">
          <input className="bg-[#131314] w-full p-4" placeholder="Search" />
          <button className="p-5 bg-[#2F2E31] rounded-md">
            <FiFilter size={20} />
          </button>
        </div>
      </header>

      <article className="w-full h-full overflow-auto">
        <ul className="grid grid-cols-2 gap-4">{A}</ul>
      </article>
    </section>
  );
};
