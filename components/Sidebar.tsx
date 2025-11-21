"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:absolute rounded-full flex lg:flex-col gap-4 items-center overflow-x-scroll bg-primary py-2 px-4 scrollbar-hidden lg:py-4 lg:px-2 lg:top-1/2 lg:-translate-y-1/2 -left-7"
    >
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.id}
          isActive={active === item.id}
          onClick={() => setActive(item.id)}
        />
      ))}
    </motion.div>
  );
};

const SidebarItem = ({
  isActive = false,
  icon: Icon,
  className,
  label,
  ...props
}: ComponentProps<"div"> & {
  isActive?: boolean;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <div
      className={cn(
        "p-2 rounded-full flex justify-center items-center text-background cursor-pointer gap-2",
        {
          "bg-[#88C6FF66] shadow-foreground/20 shadow-md": isActive,
        },
        className
      )}
      {...props}
    >
      <Icon className="size-6" />
      <span
        className={cn("lg:hidden capitalize text-sm font-medium", {
          "font-semibold": isActive,
        })}
      >
        {label}
      </span>
    </div>
  );
};
