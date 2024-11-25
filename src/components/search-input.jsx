import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchInput() {
  return (
    <div className=" ml-8 flex items-center relative   ">
      <Search className=" absolute left-3 p-1" />
      <Input
        type="text"
        placeholder="Search..."
        className=" pl-12 rounded-[100px]"
      />
    </div>
  );
}
