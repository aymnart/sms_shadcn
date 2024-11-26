import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    id: 1,
    title: "School Reopening",
    date: "2024-11-20",
    description:
      "The school will reopen for the new term on November 20th. All students are expected to attend the assembly at 9:00 AM.",
  },
  {
    id: 2,
    title: "Sports Day",
    date: "2024-11-25",
    description:
      "Join us for the annual sports day. Events include relay races, high jump, and more. Parents are welcome!",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    date: "2024-11-30",
    description:
      "Scheduled meetings between parents and teachers to discuss student progress. Book your slots in advance.",
  },
  {
    id: 4,
    title: "Winter Vacation",
    date: "2024-12-15",
    description:
      "The school will close for winter vacation starting December 15th. Classes will resume on January 3rd.",
  },
  {
    id: 5,
    title: "Science Exhibition",
    date: "2024-12-10",
    description:
      "Students will showcase their science projects in the exhibition hall. All are invited to attend.",
  },
];

const Announcements = () => {
  let array =
    announcements.length > 3 ? announcements.slice(0, 3) : announcements; // limit the events to display to 3 elements

  return (
    <div className="bg-background mt-4 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="capitalize text-xs text-gray-400 cursor-pointer">
          view all
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {array.map((el) => (
          <Card
            key={el.id}
            className="odd:bg-card even:bg-border m rounded-md p-4"
          >
            <div className="flex items-center  justify-between mb-2">
              <CardTitle className=" text-md font-semibold">
                {el.title}
              </CardTitle>
              <Badge className="text-xs font-medium rounded-md px-2 py-1">
                {el.date}
              </Badge>
            </div>
            <CardDescription className="text-sm ">
              {el.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
