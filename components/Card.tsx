import { cn } from "@/lib/utils";
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
  ...props
}: ComponentProps<"div"> & {
  withoutBorder?: boolean;
  label: string;
  value: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <div
      className={cn(
        "py-3 rounded-[14px] bg-background shadow-xl w-[222px]",
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
  );
};
