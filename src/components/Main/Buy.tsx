import { FaBeer } from "react-icons/fa";

export const Buy = () => (
  <article className="justify-between align-baseline p-8">
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 w-full text-sm font-bold [&>*]:py-1 [&>*]:px-4 [&>*]:rounded-full [&>*]:bg-dark-gray [&>*]:border-2 [&>*]:border-gray-500">
        <button className="w-[20%] hover:bg-white hover:text-black transition-colors duration-200 hover:border-white">
          Buy
        </button>
        <button className="w-[30%] hover:bg-white hover:border-white hover:text-black transition-colors duration-200">
          Sell
        </button>
        <button className="w-[50%] hover:bg-white hover:border-white hover:text-black transition-colors duration-200">
          Exchange
        </button>
      </div>

      <div className="w-full ">
        <div>
          <p className="mb-2">Coin</p>
          <div className="w-full rounded-md h-8 bg-dark-gray"></div>
        </div>
      </div>
      <div>
        <p className="mb-2">Amount</p>
        <div className="w-full rounded-md h-8 bg-dark-gray"></div>
      </div>
    </div>

    <div className="text-xl w-full flex flex-col gap-2">
      <div className="flex justify-between max-w-lg">
        <div>Total:</div>
        <p className="font-black">R$ 1,342.00</p>
      </div>

      <button className="text-center px-8 py-4 w-full bg-white text-black font-bold rounded-md flex items-center justify-center gap-4">
        <div>
          <FaBeer />
        </div>
        <p>Buy Etherum</p>
      </button>
    </div>
  </article>
);
