import { FaBeer } from "react-icons/fa";
import UpgradeBg from "../../assets/images/upgrade-bg.png";

export const Main = () => {
  return (
    <section className="w-full">
      <header className="h-[12vh] flex justify-between p-10 relative">
        <h1 className="text-2xl">
          Welcome back, <b>Sally</b>
        </h1>

        <nav>
          {/* < input type="text" /> */}
          <img src="" alt="" />
          <img src="" alt="" />
        </nav>
      </header>

      <main className="h-[88vh] w-full flex [&>section]:px-5 pb-5 [&>section]:flex [&>section]:flex-col [&>section]:gap-8">
        <section className="w-[70%] [&>article]:w-full  [&>article]:rounded-xl">
          <article className="h-[35%] bg-dark-purple flex flex-row justify-between gap-6">
            <div className="m-8 flex flex-col justify-center gap-10">
              <p className="text-3xl max-w-[500px] font-medium">
                Upgrade Your Plan to Premium and Get unlimited access
              </p>
              <button className="py-4 px-10 rounded-md bg-purple font-bold w-fit">
                Upgrade Now
              </button>
            </div>
            <img
              src={UpgradeBg}
              className="h-full mix-blend-lighten mr-2"
              alt=""
            />
          </article>

          <article className="h-[25%] bg-section mt-4">
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
                  <FaBeer className="" size={22} />
                </div>

                <b className="text-4xl">$1.234</b>
                <b className="text-xs mt-1">Total assepts</b>
              </li>
              <li className="bg-section ">
                <div className="bg-section w-12 h-12 absolute top-0 rounded-full -mt-6 flex items-center justify-center">
                  <FaBeer className="" size={22} />
                </div>

                <b className="text-4xl">$1.234</b>
                <b className="text-xs mt-1">Total assepts</b>
              </li>
            </ul>
          </article>

          <article className="h-[50%] bg-section"></article>
        </section>

        <section className="w-[30%] [&>article]:bg-section [&>article]:w-full  [&>article]:rounded-lg pl-0 [&>article]:h-[50%] [&>article]:flex [&>article]:flex-col [&>article]:items-center [&>article]:justify-center [&>article]:gap-4">
          <article className="flex">
            <div className="w-36 h-36 bg-purple rounded-full"></div>
            <p>Total Balance</p>
            <b className="text-4xl">$15,453.06</b>
            <div className="[&>*]:bg-green [&>*]:rounded-full [&>*]:py-1 [&>*]:px-3 text-dark-gray text-xs flex gap-2 font-bold [&>*]:flex [&>*]:items-center [&>*]:justify-center">
              <div>+12.34%</div>
              <div className="">
                <FaBeer />
              </div>
            </div>
          </article>
          <article className=""></article>
        </section>
      </main>
    </section>
  );
};
