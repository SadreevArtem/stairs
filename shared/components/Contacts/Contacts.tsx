import Link from "next/link";

export const Contacts = ()=> {
    return (
      <div
        id="contacts"
        className="container flex flex-col justify-between mb-6 md:mb-8"
      >
        <h2 className="text-lg md:text-xl lg:text-2xl  mb-6">Контакты</h2>
        <ul className="flex flex-col gap-4">
          <li>
            telegramm -
            <Link className="hover:text-hover" href="https://t.me/yuliya_kobalyan">@yuliya_kobalyan</Link>
          </li>
          <li>
            <Link
              href={`tel:+79068237117`}
              className=" w-fit hover:text-hover"
            >
              +7 (906) 823 71 17
            </Link>
          </li>
        </ul>
      </div>
    );
}