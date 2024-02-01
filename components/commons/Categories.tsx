import { categories } from "@/config/categories";
import Image from "next/image";
import React from "react";

export default function Categories() {
  return (
    <div className="flex items-center space-x-8 whitespace-nowrap px-10 my-3 overflow-x-auto pb-4">
      {categories.map((item) => (
        <div className="flex items-center flex-col">
          <Image
            src={item.icon}
            width={25}
            height={25}
            alt={item.name}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
