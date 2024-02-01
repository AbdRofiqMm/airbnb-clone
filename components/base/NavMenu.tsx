import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MenuIcon } from "lucide-react";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";

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
          <LoginModal />
          <SignupModal />
        </ul>
      </PopoverContent>
    </Popover>
  );
}
