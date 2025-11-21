import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 267, mobile: 180 },
  { month: "August", desktop: 289, mobile: 220 },
  { month: "September", desktop: 245, mobile: 165 },
  { month: "October", desktop: 198, mobile: 145 },
  { month: "November", desktop: 321, mobile: 240 },
  { month: "December", desktop: 278, mobile: 195 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--muted)",
  },
} satisfies ChartConfig;

export const DashboardChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-60 w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-primary)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-primary)",
          }}
          activeDot={{
            r: 6,
          }}
        />
        <Line
          dataKey="mobile"
          type="natural"
          stroke="var(--color-muted)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-muted)",
          }}
          activeDot={{
            r: 6,
          }}
        />
        s
      </LineChart>
    </ChartContainer>
  );
};
