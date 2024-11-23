import { ModeToggle } from "./mode-toggle";
import SearchInput from "./search-input";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  return (
    <header className="flex h-16 shrink-0 m-1 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-1 ">
        <SidebarTrigger className="ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
      <SearchInput />
      <div className="flex w-fit ml-auto items-center gap-4 mx-2">
        <ModeToggle />
      </div>
    </header>
  );
}
