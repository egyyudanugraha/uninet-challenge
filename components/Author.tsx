import { Github } from "lucide-react";
import Link from "next/link";
import { Text } from "./Text";

export const Author = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between w-full max-w-[890px] px-6">
      <Text size="small">
        Build by{" "}
        <Link
          href="https://egyyudanugraha.vercel.app/"
          className="text-sm inline font-semibold underline-offset-4 hover:underline"
        >
          Egy Yuda
        </Link>{" "}
        for challenge at{" "}
        <span className="font-semibold">UNINET MEDIA SAKTI</span>
      </Text>

      <Link
        href="https://github.com/egyyudanugraha/uninet-challenge"
        className="flex gap-1.5 items-center text-sm underline-offset-4 hover:underline"
      >
        <Github className="size-4" />
        Repository Link
      </Link>
    </div>
  );
};
