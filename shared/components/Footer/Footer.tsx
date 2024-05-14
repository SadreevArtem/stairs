import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "../Socials/Socials";

export const Footer: React.FC = () => {
  return (
    <footer className='w-full flex flex-col'>
      <div className='container'>
      <div className='w-full h-[2px] bg-gray-200 my-4 md:my-6 opacity-50' />

        <div className="flex justify-between items-center mb-4 md:mb-6">
        <div className='relative flex flex-col md:flex-row gap-6 items-center'>
          <Link href='/' className='relative block w-[50px] h-[50px] shrink-0'>
            <Image src='/logo.png' fill alt='Логотип' className='w-[30px] h-[30px]' />
          </Link>
          <h2>Юлия Кобалян</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
        <Socials className="" socials={[
              { id: 1, name: "social-vk", value: "/" },
              { id: 2, name: "social-tg", value: "/" },
              { id: 3, name: "social-youtube", value: "/" },
              { id: 4, name: "social-ok", value: "/" }
            ]}/>
        <Link href={`tel:+79068237117`} className='text-base font-semibold w-fit'>
          +7 (906) 823 71 17
          </Link>
        </div>
        
            
            </div>
           
        
      </div>
    </footer>
  );
};
