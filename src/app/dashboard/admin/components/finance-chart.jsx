import {
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", income: 186, expense: 80 },
  { month: "February", income: 305, expense: 200 },
  { month: "March", income: 237, expense: 120 },
  { month: "April", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
  { month: "July", income: 186, expense: 80 },
  { month: "August", income: 305, expense: 200 },
  { month: "September", income: 237, expense: 120 },
  { month: "October", income: 73, expense: 190 },
  { month: "November", income: 209, expense: 130 },
  { month: "December", income: 214, expense: 140 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-2))",
  },
};

export function FinanceChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-0 ">
        <CardTitle>Finance</CardTitle>
        <CardDescription>Incomes and expenses for each month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={15}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={15} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="income"
              type="monotone"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-income)",
              }}
              activeDot={{
                r: 5,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={10}
              />
            </Line>
            <Line
              dataKey="expense"
              type="monotone"
              stroke="var(--color-expense)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-expense)",
              }}
              activeDot={{
                r: 5,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={10}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
