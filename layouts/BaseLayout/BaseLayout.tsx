import { Footer } from "@/shared/components/Footer/Footer";
import { Header } from "@/shared/components/Header/Header";
import React from "react";


export const BaseLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='grow bg-gray-background text-black'>{children}</main>
      <Footer />
    </>
  );
};
