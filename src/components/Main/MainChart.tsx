import { FaGratipay, FaStar } from "react-icons/fa";
import { formatedNumber } from "../../utils/numberFormat";
import { Chart } from "./Chart";

const sizeDivision = {
  header: 10,
  main: 80,
  footer: 10,
};
enum Side {
  Buy = "buy",
  Sell = "sell",
}

type AmountAndCurrency = { amount: number; currency: string };

type TableCell = {
  price: AmountAndCurrency;
  side: Side;
  amount: AmountAndCurrency;
  return: AmountAndCurrency;
}[];

const tableData: TableCell = [
  {
    price: { amount: 3000, currency: "busd" },
    side: Side.Buy,
    amount: { amount: 0.492938, currency: "busd" },
    return: { amount: 3000, currency: "busd" },
  },
  {
    price: { amount: 3000, currency: "busd" },
    side: Side.Buy,
    amount: { amount: 0.492938, currency: "busd" },
    return: { amount: 3000, currency: "busd" },
  },
  {
    price: { amount: 3000, currency: "busd" },
    side: Side.Buy,
    amount: { amount: 0.492938, currency: "busd" },
    return: { amount: 3000, currency: "busd" },
  },
  {
    price: { amount: 3000, currency: "busd" },
    side: Side.Buy,
    amount: { amount: 0.492938, currency: "busd" },
    return: { amount: 3000, currency: "busd" },
  },
  {
    price: { amount: 3000, currency: "busd" },
    side: Side.Buy,
    amount: { amount: 0.492938, currency: "busd" },
    return: { amount: 3000, currency: "busd" },
  },
  {
    price: { amount: 3000, currency: "busd" },
    side: Side.Buy,
    amount: { amount: 0.492938, currency: "busd" },
    return: { amount: 3000, currency: "busd" },
  },
];

export const MainChart = () => {
  return (
    <section className="w-[70%] h-full [&>article]:w-full bg-[#242427] [&>article]:rounded-xl">
      <header
        className={`w-full h-[${sizeDivision.header}%] flex justify-between`}
      >
        <div>
          <h1 className="text-4xl">BTC/BUSD</h1>
          <div className="flex gap-2 mt-1 items-center">
            <p>1.304939</p>
            <p className="text-green">+3.35%</p>
            <FaGratipay />
          </div>
        </div>

        <div className="flex gap-10 text-right text-lg">
          <div>
            <p>{formatedNumber(1234234)} BUSD</p>
            <p className="text-[#83838B]">24h Volume</p>
          </div>
          <div>
            <p>{formatedNumber(1234)} BTC</p>
            <p className="text-[#83838B]">24h Volume</p>
          </div>
          <div>
            <button className="bg-[#2F2E31] p-4 rounded-md">
              <FaStar />
            </button>
          </div>
        </div>
      </header>

      <div className={`w-full h-[50%]`}>
        <Chart />
      </div>

      <table className="fixed-header w-full text-left border-separate border-spacing-y-2 border border-none text-sm overflow-auto">
        <thead className="[&>th]:pl-4">
          <th>Price</th>
          <th>Side</th>
          <th>Amount</th>
          <th>Return</th>
          <th>Edit</th>
        </thead>
        <tbody className="text-lg uppercase [&>tr]:bg-[#2F2E31] [&>td]:p-4">
          {tableData.map((x) => (
            <tr className="[&>td]:px-4 [&>td]:py-2">
              <td>
                {formatedNumber(x.price.amount)} {x.price.currency}
              </td>
              <td
                className={`${
                  x.side === Side.Buy ? "text-green" : "text-red-700"
                }`}
              >
                {x.side}
              </td>
              <td className="">
                {x.amount.amount} {x.amount.currency}
              </td>
              <td>
                {formatedNumber(x.return.amount)} {x.return.currency}
              </td>
              <td className="capitalize">
                <button className="px-6 py-1 bg-[#414043] rounded-md hover:bg-opacity-[70%]">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer
        className={`w-full h-[${sizeDivision.footer}%] flex mt-auto items-center justify-between`}
      >
        <div className="flex gap-1 flex-col">
          <p className="text-[#83838B]">Available BTC</p>
          <p className="text-xl">{formatedNumber(1234234)}</p>
        </div>
        <div className="flex gap-4">
          <div className="w-full rounded-md h-14 bg-[#131314] flex items-center px-4">
            <p className="w-40">0.49392</p>
            <p>BTC</p>
          </div>
          <button className="bg-[#D5E517] h-14 px-6 py-3 text-black w-full text-xl rounded-md">
            Place Orders
          </button>
        </div>
      </footer>
    </section>
  );
};
