import React from "react";
import BrandLogo from "./BrandLogo";
import { MenuIcon, Search } from "lucide-react";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 border-b-[1px]">
      <div>
        <BrandLogo />
      </div>
      <div className="flex items-center space-x-2 border rounded-full p-2">
        <span className="text-sm pl-2">Anywhere</span>
        <span>|</span>
        <span className="text-sm">Any Week</span>
        <span>|</span>
        <span className="text-sm text-gray-400">Add Guest</span>
        <span className="bg-brand text-white rounded-full p-2">
          <Search
            width={17}
            height={17}
          />
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Add your home</span>
        <span>
          <NavMenu />
        </span>
      </div>
    </div>
  );
}
