import { NavUser } from "@/components/nav-user";
import data from "@/lib/menu-data";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <div className="flex items-center gap-4">
      <Input type="text" placeholder="Search..." />
      <NavUser user={data.user} />
    </div>
  );
}
