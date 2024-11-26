import { ModeToggle } from "./mode-toggle";
import SearchInput from "./search-input";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
  return (
    <header className="fixed z-50 w-auto rounded-md py-8 px-6 bg-background flex h-16 shrink-0 m-1 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center">
        <SidebarTrigger />
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
}
