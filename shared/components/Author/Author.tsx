import clsx from "clsx";
import Image from "next/image"

export const Author = () => {
    return (
      <div className="container">
        <div className="flex justify-end relative max-md:flex-col">
          <div className="flex relative justify-center items-start border-8 border-[#f9deaf]">
            <div className={clsx("relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg md:hidden")}>
              <Image
              width={560}
              height={750}
                src="/yuliya2.jpg"
                alt=""
                className="top-0 left-0 right-0 bottom-0"
              />
            </div>
            <div className={clsx("relative md:top-[30px] md:right-[-30px] top-[25px] right-[-25px] shadow-lg max-md:hidden")}>
              <Image
              width={560}
              height={750}
                src="/yuliya.jpg"
                alt=""
                className="top-0 left-0 right-0 bottom-0"
              />
            </div>
          </div>
          <div className="w-[50%] ml-[60px] pt-[100px] max-md:pt-[45px] max-md:ml-[20px] max-md:w-full">
            <h1 className="md:text-[80px] max-md:text-xl max-md:mb-2">Юлия Кобалян</h1>
            <ul className="list-disc pl-4 text-lg flex flex-col gap-2 max-md:text-base w-full">
                <li>Клинический психолог</li>
                <li>Психосоматический терапевт</li>
                <li>Специалист по Германской Новой Медицине</li>
                <li>Практикующий гипнотерапевт</li>
                <li>Специалист по системным расстановкам</li>
                <li>Семейная терапия</li>
                <li>Детская психосоматика</li>
            </ul>
          </div>
        </div>
      </div>
    );
}