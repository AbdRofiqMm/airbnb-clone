import AddHomeForm from "@/components/AddHomeForm";
import Navbar from "@/components/base/Navbar";
import Counter from "@/components/commons/Counter";
import { generateRandomNum } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4  ">
          <div>
            <h1 className="font-bold text-brand text-7xl">Airbnb It</h1>
            <p className="text-3xl text-black font-semibold">You could earn</p>
            <div className="flex items-center space-x-4">
              <Counter num={generateRandomNum()} />
              <span className="text-3xl font-bold">/per night</span>
            </div>
            <div className="flex space-x-4 mt-5">
              <Image
                src={"/images/home_img.jpeg"}
                height={200}
                width={200}
                alt={"home"}
                className="rounded-sm object-cover"
              />
              <Image
                src={"/images/home_img1.jpeg"}
                height={200}
                width={200}
                alt={"home1"}
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <AddHomeForm />
        </div>
      </div>
    </div>
  );
}
