import { Author } from "@/components/Author";
import { MainComponent } from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen md:items-center justify-center bg-muted py-8 md:py-21 px-4">
      <Author />
      <MainComponent />
    </div>
  );
}
