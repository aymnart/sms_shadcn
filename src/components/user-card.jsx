import { Ellipsis } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const UserCard = ({ type }) => {
  return (
    <div className="rounded-lg border p-4 flex-1 min-w-[130px] shadow border-t-4 odd:border-t-primary even:border-t-accent odd:bg-background even:bg-border ">
      <div className="flex justify-between items-center">
        <Badge
          variant="outline"
          className="bg-white text-gray-900 border text-[10px] font-thin "
        >
          2024/12/25
        </Badge>

        <Ellipsis />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-400">{type}s</h2>
    </div>
  );
};

export default UserCard;
