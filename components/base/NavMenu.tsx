import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";

export default function NavMenu() {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="cursor-pointer"
      >
        <MenuIcon />
      </PopoverTrigger>
      <PopoverContent className="mr-6">
        <ul>
          <li className="hover:bg-gray-200 p-2 cursor-pointer rounded-md">Login</li>
          <li className="hover:bg-gray-200 p-2 cursor-pointer rounded-md">Sign up</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
