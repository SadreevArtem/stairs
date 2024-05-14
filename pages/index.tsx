import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`container flex flex-col justify-between ${inter.className}`}
    >
      <div className="">
        <h1 className="text-xl">Клинический психолог - Юлия Кобалян</h1>
        <ul>
          <li>Психосоматический терапевт/Специалист по Германской Новой Медицине</li>
          <li>Практикующий гипнотерапевт</li>
          <li>Специалист по системным расстановкам</li>
          <li>Семейная терапия</li>
          <li>Детская психосоматика</li>
        </ul>
      </div>
      
    
    </div>
  );
}
