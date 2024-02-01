import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

export default function MobileNav() {
  return (
    <div className="m-3 md:hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center w-5/6 border rounded-full px-3 py-1">
          <Search />
          <div className="flex flex-col ml-3">
            <span className="text-sm font-bold">Anywhere</span>
            <span className="text-sm">Any week . Add guest</span>
          </div>
        </div>
        <div className="w-1/6 flex justify-center items-center">
          <SlidersHorizontal />
        </div>
      </div>
    </div>
  );
}
