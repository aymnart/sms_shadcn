import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  //   ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { gender: "girls", count: 275, fill: "#333" },
  { gender: "boys", count: 200, fill: "#5555" },
];
// const total = chartData[0].count + chartData[1].count;
// const gPercent = Math.round((chartData[0].count * 100) / total);
// const bPercent = Math.round((chartData[1].count * 100) / total);
const chartConfig = {
  count: {
    label: "count",
  },
  girls: {
    label: `girls`,
    color: "hsl(var(--chart-1))",
  },
  boys: {
    label: `boys`,
    color: "hsl(var(--chart-2))",
  },
};

export function CountChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Students</CardTitle>
        <CardDescription>by gender</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="gender" />} />
            <Pie data={chartData} dataKey="count"></Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="gender" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
