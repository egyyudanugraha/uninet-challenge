"use client";

import { cn } from "@/lib/utils";
import {
  Archive,
  BriefcaseBusiness,
  Home,
  LucideProps,
  PieChart,
} from "lucide-react";
import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from "react";

const SIDEBAR_ITEMS = [
  { id: "home", icon: Home },
  { id: "work", icon: BriefcaseBusiness },
  { id: "chart", icon: PieChart },
  { id: "archive", icon: Archive },
];

export const Sidebar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="absolute rounded-full flex flex-col gap-4 items-center bg-primary py-4 px-2 top-1/2 -translate-y-1/2 -left-7">
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          isActive={active === item.id}
          onClick={() => setActive(item.id)}
        />
      ))}
    </div>
  );
};

const SidebarItem = ({
  isActive = false,
  icon: Icon,
  className,
  ...props
}: ComponentProps<"div"> & {
  isActive?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <div
      className={cn(
        "size-10 rounded-full flex justify-center items-center text-background cursor-pointer",
        {
          "bg-[#88C6FF66] shadow-foreground/20 shadow-md": isActive,
        },
        className
      )}
      {...props}
    >
      <Icon className="size-6" />
    </div>
  );
};
