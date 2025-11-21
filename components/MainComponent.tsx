import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainComponent = () => {
  return (
    <main className="flex relative w-full max-w-[890px] flex-col gap-10.5 justify-between bg-background rounded-[18px] p-10 shadow-lg">
      <Header />
      <Sidebar />
      <Dashboard />
    </main>
  );
};
