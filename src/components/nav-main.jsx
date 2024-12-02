/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";
import { role } from "@/lib/data";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className=" group/collapsible"
          >
            <SidebarMenuItem className="pb-4">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  className="text-primary"
                  tooltip={item.title}
                >
                  {item.icon && <item.icon />}
                  <span className="pl-1">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="px-4 py-2">
                  {item.items?.map((subItem) => {
                    if (subItem.visible.includes(role)) {
                      return (
                        <SidebarMenuSubItem
                          className="hover:outline rounded-md outline-white outline-2"
                          key={subItem.label}
                        >
                          <SidebarMenuSubButton>
                            {subItem.icon && <subItem.icon />}
                            <Link to={subItem.href}>{subItem.label}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    }
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

{
  /* <>
{items.map((item) => (
  <SidebarGroup key={item.title}>
    <SidebarGroupLabel className="text-primary">
      {item.icon && <item.icon />}
      {item.title}
    </SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem className="py-2">
        <SidebarMenuSub className="px-4 py-1">
          {item.items?.map((subItem) => {
            if (subItem.visible.includes(role)) {
              return (
                <SidebarMenuSubItem
                  className="hover:outline rounded-md outline-white outline-2"
                  key={subItem.label}
                >
                  <SidebarMenuSubButton>
                    {subItem.icon && <subItem.icon />}
                    <Link to={subItem.href}>{subItem.label}</Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            }
            return null;
          })}
        </SidebarMenuSub>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
))}
</> */
}
