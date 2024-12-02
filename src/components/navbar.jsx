import { ModeToggle } from "./mode-toggle";
import SearchInput from "./search-input";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  return (
    <header className="justify-between w-full rounded-md py-8 px-2  bg-background flex h-16 shrink-0 m-1 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex w-full max-w-screen-sm items-center">
        <SidebarTrigger />
        <SearchInput />
      </div>
      <ModeToggle />
    </header>
  );
}
