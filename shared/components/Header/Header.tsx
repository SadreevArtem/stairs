import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  

  return (
    <header className={""}>
      <div
        className={
          "container flex items-center justify-between min-h-6"
        }
      >
        <Link href="/" className="relative block w-[120px] h-full md:w-[200px]">
          <Image
            src="/logo.png"
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
