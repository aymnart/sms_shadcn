import { Search } from "lucide-react";
import { Input } from "./ui/big-input";

export default function SearchInput() {
  return (
    <div className="mx-4 w-full flex items-center relative   ">
      <Search className=" absolute left-3 p-1" />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-12 pr-20 rounded-lg"
      />
      <code className="text-xs bg-border/50 absolute right-3 px-1 rounded ">
        ctrl + k
      </code>
    </div>
  );
}
