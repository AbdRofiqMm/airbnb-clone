import Image from "next/image";
import React from "react";

export default function BrandLogo() {
  return (
    <div>
      <Image
        src={"/images/logo.png"}
        width={120}
        height={120}
        alt="logo"
      />
    </div>
  );
}
