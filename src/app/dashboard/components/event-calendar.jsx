import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar1, Ellipsis } from "lucide-react";

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
      "A break for students and staff to have lunch in the cafeteria.A break for students and staff to have lunch in the cafeteria.A break for students and staff to have lunch in the cafeteria.A break for students and staff to have lunch in the cafeteria.",
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
    <div className="">
      <div className="w-fit ">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-background rounded-md border shadow-md"
        />
      </div>

      <div className="cardLayout">
        <div className="cardHeader">
          <h1 className="flex">
            <Calendar1 className="mr-4" /> Events
          </h1>
          <Ellipsis />
        </div>
        {array.map((event) => (
          <Card
            className=" p-5 rounded-md border border-border border-l-4 odd:border-l-primary even:border-l-secondary"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="font-semibold text-md">
                {event.title}
              </CardTitle>
              <Badge className="w-fit font-medium">{event.time}</Badge>
            </div>
            <CardDescription className="mt-2 text-sm text-gray-500">
              {event.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
}
