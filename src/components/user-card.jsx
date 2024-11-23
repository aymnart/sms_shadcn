import { Ellipsis } from "lucide-react";
const UserCard = ({ type }) => {
  return (
    <div className="rounded-lg border p-4 flex-1 min-w-[130px] shadow even:bg-secondary ">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-lg text-gray-900">
          2024/05
        </span>
        <Ellipsis />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-400">{type}s</h2>
    </div>
  );
};

export default UserCard;
