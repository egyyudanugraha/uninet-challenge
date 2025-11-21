import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainComponent = () => {
  return (
    <main className="flex relative w-full max-w-[890px] flex-col gap-7 lg:gap-10.5 md:justify-between bg-background rounded-[18px] p-6 lg:p-10 shadow-lg">
      <Header />
      <Sidebar />
      <Dashboard />
    </main>
  );
};
