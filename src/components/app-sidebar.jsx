//import * as React from "react";

import data from "@/lib/menu-data";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* ---SideBar Header--- */}
      <SidebarHeader>
        <TeamSwitcher schools={data.schools} />
      </SidebarHeader>

      {/* ---SideBar Content--- */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* ---SideBar Footer--- */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
