import Image from "next/image";
import { Fira_Sans, Inter, Ultra } from "next/font/google";
import { Author } from "@/shared/components/Author/Author";
import { AppAccordionGroup } from "@/shared/components/AppAccordionGroup/AppAccordionGroup";
import { accordeonItems, MetaData, reviews } from "@/shared/static";
import { ReviewsBlock } from "@/shared/components/ReviewsBlock/ReviewsBlock";
import { Contacts } from "@/shared/components/Contacts/Contacts";
import { AppHead } from "@/shared/components/AppHead";

const inter = Fira_Sans({weight: "300", subsets:["latin", "cyrillic"], });

export default function Home() {
  return (
    <>
      <AppHead title={MetaData.title} description={MetaData.description} />

      <div className={`flex flex-col justify-between ${inter.className}`}>
        <Author />
        <div className="md:mt-[60px] mt-8">
          <AppAccordionGroup
            className="container"
            items={accordeonItems}
            accordionContentSlot={(item) => (
              <ul>
                {item.value.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            )}
          />
        </div>
        <div id="reviews" className="mt-[60px]">
          {/* <ReviewsBlock items={reviews} /> */}
        </div>
        <div id="reviews" className="mt-[60px]">
          <Contacts />
        </div>
      </div>
    </>
  );
}
