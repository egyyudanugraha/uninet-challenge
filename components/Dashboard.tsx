"use client";

import { LayoutGrid, MessageCircleMore } from "lucide-react";
import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Card } from "./Card";
import { Text } from "./Text";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { Progress } from "./ui/progress";

const progressValue = 50;

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];
const chartConfig = {
  safari: {
    label: "Safari",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export const Dashboard = () => {
  return (
    <div className="space-y-7">
      <div className="flex items-center gap-8 px-6">
        <NewMessageCard />
        <Card label="Leads" value="85" icon={LayoutGrid} withoutBorder>
          <div className="px-6 pt-6 flex justify-between relative">
            <div className="grid grid-cols-[auto_1fr] gap-2 w-[70%]">
              <div>
                <Text size="extra-small" weight="bold" className="text-end">
                  60%
                </Text>
              </div>
              <Text size="extra-small" className="w-full">
                Daily Goal
              </Text>
              <div>
                <Text size="extra-small" weight="bold" className="text-end">
                  72
                </Text>
              </div>
              <Text size="extra-small" className="w-full">
                This week
              </Text>
            </div>

            <div className="w-18 absolute right-4 bottom-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full h-full"
              >
                <RadialBarChart
                  data={chartData}
                  startAngle={0}
                  endAngle={250}
                  innerRadius={28}
                  outerRadius={44}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={[30, 24]}
                  />
                  <RadialBar dataKey="visitors" background cornerRadius={2} />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  />
                </RadialBarChart>
              </ChartContainer>
            </div>
          </div>
        </Card>
        <NewMessageCard />
      </div>

      <div className="h-60">{/* Chart Here */}</div>
    </div>
  );
};

const NewMessageCard = () => {
  return (
    <Card label="New Message" value="85" icon={MessageCircleMore}>
      <div className="px-6 pt-6 space-y-2">
        <div className="relative">
          <Progress value={progressValue} />

          <div
            className="absolute -top-7 drop-shadow-xl -translate-x-1/2"
            style={{
              left: `${progressValue}%`,
            }}
          >
            <div className="bg-background rounded-[4px] text-[8px] font-bold p-[3px] text-foreground">
              {progressValue}%
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-background" />
            </div>
          </div>
        </div>

        <Text size="extra-small" weight="bold">
          Response Rate
        </Text>
      </div>
    </Card>
  );
};
