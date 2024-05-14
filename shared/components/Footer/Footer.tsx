import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className='w-full flex flex-col bg-gray-purple py-8 md:py-20 print:hidden'>
      <div className='container'>
        <div className='flex mb-6 md:mb-[44px] flex-col md:flex-row max-md:gap-6'>
          <Link href='/' className='relative block w-[233px] h-[50px] shrink-0'>
            <Image src='/logo.svg' fill alt='Логотип' className='w-full h-full' />
          </Link>
        </div>

        <div className='flex flex-col md:flex-row max-md:gap-6'>
       
        </div>

        <div className='w-full h-[2px] bg-gray-4 my-6 md:my-8' />

      </div>
    </footer>
  );
};
