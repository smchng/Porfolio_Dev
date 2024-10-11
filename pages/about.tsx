// import { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { SkillTable, ExpTable } from "@/components/table";
// import { TitleButton } from "@/components/button";
import { TypingEllipsis } from "@/components/dots";
import { HoverImg } from "@/components/hover";
import { NavItems } from "@/content/nav_content";
import { FadeIn } from "@/components/fadeIn";
import * as about from "@/content/about_content";

export default function About() {
  return (
    <div className="px-[3vw]">
      <FadeIn className="md:h-screen pt-[20vh]">
        <h3>{about.aboutText.intro}</h3>
        <p className="py-[15vh] md:max-w-[60vw]">
          <HoverImg img="/imgs/me.jpeg" displayText={about.aboutText.desc} />{" "}
          <strong>{about.aboutText.logline}</strong>
        </p>
      </FadeIn>{" "}
      <FadeIn className="items-center grid md:grid-cols-2 gap-5 h-[50vh]">
        {about.skillItems.map((item, index) => (
          <SkillTable
            key={index}
            header={item.header}
            component={item.component}
          />
        ))}
      </FadeIn>
      {/* <div>
        <h3>{about.aboutText.headline}</h3>

        <div className="md:flex ">
          {about.buttonItems.map((item, index) => (
            <TitleButton key={index} header={item.header} text={item.text} />
          ))}
        </div>
      </div> */}
      <div className="my-[35vh] ">
        <FadeIn>
          <h3>
            {about.aboutText.headline}
            <TypingEllipsis />
          </h3>
        </FadeIn>
        <FadeIn>
          <ExpTable header="CURRENTLY" list={about.curItems} />
        </FadeIn>
        <FadeIn>
          <ExpTable header="PREVIOUSLY" list={about.preItems} />
        </FadeIn>
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        <FadeIn>
          {" "}
          <h1 className="flex max-w-[80vw] text-center text-base sm:text-lg pb-[8vh]">
            {about.aboutText.headline2}
            {/* <div className="flex items-end">
            <TypingEllipsis />
          </div> */}
          </h1>{" "}
        </FadeIn>
        <FadeIn>
          {" "}
          <div className=" flex space-x-[3vw] justify-center w-full">
            {NavItems.slice(2, 6).map((item, index) => (
              <Link href={item.link} key={index} target="_blank">
                <p className="text-white text-[10px] md:text-[11px] ">
                  {item.text}
                  {index !== NavItems.slice(2, 6).length - 1 && (
                    <span className="pl-[3vw]">/</span>
                  )}
                </p>
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
