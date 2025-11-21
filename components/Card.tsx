import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";
import {
  ComponentProps,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { Text } from "./Text";

export const Card = ({
  className,
  children,
  withoutBorder,
  label,
  value,
  icon: Icon,
  delay = 0.1,
  ...props
}: ComponentProps<"div"> & {
  withoutBorder?: boolean;
  delay?: number;
  label: string;
  value: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="w-full lg:auto"
    >
      <div
        className={cn(
          "pt-3 pb-5 rounded-[14px] bg-background shadow-xl w-full lg:w-[222px]",
          className
        )}
        {...props}
      >
        <div
          className={cn("pb-1 flex justify-between px-6", {
            "border-b border-muted": !withoutBorder,
          })}
        >
          <div>
            <Text size="small" className="leading-6">
              {label}
            </Text>
            <Text className="text-3xl font-bold leading-9">{value}</Text>
          </div>
          <Icon className="size-6" />
        </div>
        {children}
      </div>
    </motion.div>
  );
};
