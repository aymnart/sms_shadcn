import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { day: "Mon", present: 186, absent: 80 },
  { day: "Tue", present: 305, absent: 200 },
  { day: "Wed", present: 237, absent: 120 },
  { day: "Thu", present: 73, absent: 190 },
  { day: "Fri", present: 209, absent: 130 },
  { day: "Sat", present: 214, absent: 140 },
];

const chartConfig = {
  present: {
    label: "present",
    color: "hsl(var(--chart-1))",
  },
  absent: {
    label: "absent",
    color: "hsl(var(--chart-2))",
  },
};

export function AttendanceChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-0">
        <CardTitle>Student attendance</CardTitle>
        <CardDescription>
          Student presence and absence in a week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickMargin={10} axisLine={false} tickLine={false} />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              dataKey="present"
              fill="var(--color-present)"
              radius={4}
              legendType="circle"
            />
            <Bar
              dataKey="absent"
              fill="var(--color-absent)"
              radius={4}
              legendType="circle"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
