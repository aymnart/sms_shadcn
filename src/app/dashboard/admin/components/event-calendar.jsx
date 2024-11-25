import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ellipsis } from "lucide-react";

const events = [
  {
    id: 1,
    time: "09:00 AM",
    title: "Morning Assembly",
    description: "A gathering for all students and staff in the main hall.",
  },
  {
    id: 2,
    time: "10:30 AM",
    title: "Math Class",
    description: "Algebra and geometry lessons for Grade 10 in Room 201.",
  },
  {
    id: 3,
    time: "12:00 PM",
    title: "Lunch Break",
    description:
      "A break for students and staff to have lunch in the cafeteria.",
  },
  {
    id: 4,
    time: "02:00 PM",
    title: "Science Fair",
    description: "Student presentations and exhibits in the science lab.",
  },
  {
    id: 5,
    time: "04:00 PM",
    title: "Parent-Teacher Meeting",
    description: "Scheduled meetings with parents in the staff room.",
  },
];

export function EventCalendar() {
  const [date, setDate] = React.useState(new Date());
  let array = events.length > 3 ? events.slice(0, 3) : events; // limit the events to display to 3 elements

  return (
    <div>
      <div className="w-fit ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-background rounded-md border shadow-md"
        />
      </div>
      {/* <div className="flex flex-col gap-2 my-8">
        {array.map((event) => (
          <Card
            className="shadow-md rounded-md h-40 border-2 border-border border-t-4 odd:border-t-primary even:border-t-accent"
            key={event.id}
          >
            <CardHeader className="h-fit m-0 ">
              <CardTitle className="text-lg">{event.title} </CardTitle>
            </CardHeader>
            <CardContent>
              {" "}
              <CardDescription className="text-sm">
                {event.description}
              </CardDescription>
            </CardContent>
            <CardFooter className=" relative">
              {" "}

            </CardFooter>
          </Card>
        ))}
      </div> */}
      <div className="flex flex-col gap-2 my-4">
        <div className="flex items-center justify-between mt-3">
          <h1 className="text-lg font-semibold my-4"> Events </h1>
          <Ellipsis />
        </div>
        {array.map((event) => (
          <Card
            className="p-5 rounded-md border-2 border-border border-t-4 odd:border-t-primary even:border-t-accent"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="font-semibold text-md">
                {event.title}
              </CardTitle>
              <Badge className={"w-fit"}>{event.time}</Badge>
            </div>
            <p className="mt-2 text-sm text-gray-500">{event.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
