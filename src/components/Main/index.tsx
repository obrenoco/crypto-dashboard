import { MainChart } from "./MainChart";
import { Search } from "./Search";

export const Main = () => {
  return (
    <section className="w-full">
      <main className="h-[100vh] w-full flex [&>section]:px-10 [&>section]:py-8 [&>section]:flex [&>section]:flex-col [&>section]:gap-6">
        <MainChart />
        <Search />
      </main>
    </section>
  );
};
