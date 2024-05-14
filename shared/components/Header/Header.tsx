import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  

  return (
    <header className={"bg-white md:bg-gray-background print:hidden"}>
      <div
        className={
          "container flex items-center justify-between md:justify-center md:gap-10 lg:gap-[120px] h-12 md:h-20 py-[12px] px-4 md:py-4 max-w-[1744px]"
        }
      >
        <Link href="/" className="relative block w-[120px] h-full md:w-[200px]">
          <Image
            src="/logo.svg"
            width={0}
            height={0}
            fill
            alt="Логотип"
            className="w-full h-full"
            priority
          />
        </Link>
      </div>
    </header>
  );
};
