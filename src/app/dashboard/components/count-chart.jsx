import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { gender: "girls", count: 275, fill: "hsl(var(--chart-1))" },
  { gender: "boys", count: 200, fill: "hsl(var(--chart-2)" },
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
    <Card className="flex h-full flex-col">
      <CardHeader className="items-center">
        <CardTitle>Students</CardTitle>
        <CardDescription>by gender</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="gender" />} />
            <Pie data={chartData} dataKey="count"></Pie>
            <ChartLegend content={<ChartLegendContent nameKey="gender" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter> </CardFooter>
    </Card>
  );
}
