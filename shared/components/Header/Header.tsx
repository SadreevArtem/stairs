import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrolltoHash } from "@/shared/lib";

export const Header: React.FC = () => {
  

  return (
    <header className={"md:mt-6 mt-2"}>
      <div
        className={
          "container flex items-center justify-between min-h-6 max-md:hidden"
        }
      >
        <Link href='/' className='relative block w-[50px] h-[50px] shrink-0'>
            <Image src='/logo.png' fill alt='Логотип' className='w-[30px] h-[30px]' />
          </Link>
          <nav className='flex items-center gap-4'>
            <ul className="flex gap-4">
              <li><div className="header-link" onClick={() => scrolltoHash('price')}>СТОИМОСТЬ УСЛУГ</div></li>
              <li><div className="header-link" onClick={() => scrolltoHash('reviews')}>ОТЗЫВЫ</div></li>
              <li><div className="header-link" onClick={() => scrolltoHash('contacts')}>КОНТАКТЫ</div></li>
            </ul>
          </nav>

      </div>
      <h1 className="md:hidden flex justify-center text-lg">Клинический психолог</h1>
      <div className='w-full h-[2px] bg-gray-200 my-2 md:my-6 opacity-50' />
    </header>
  );
};
