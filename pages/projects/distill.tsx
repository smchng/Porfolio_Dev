import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Distill() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="DISTILL BREW"
        subtext="E-COMMERCE WEBSITE FOR COFFEE APPLIANCES"
        detail="Aims to provide customers easy access to quality equipment to suit their needs. Includes introduction to the art of brewing and instructions on how to create a quality brew.

Designed and implemented an e-commerce website that showcases quality coffee equipment. Utilizes 3D textured and rendered models of the product to introduce users to the products.

Created and designed by a team of 4, this website is adapted from a 3D animation video based on the process of siphon coffee. The website is focused on accessible navigation and engaging movement"
      />
      <div className="md:w-screen relative whitespace-normal shrink-0">
        {" "}
        {/* <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4> */}
        <div className="md:grid md:grid-cols-2 pt-[25vh]">
          <h2 className="text-[40px] text-base lg:text-lg pb-[5vh]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <ProjectLink
              header="EXT. LINKS"
              component="https://distill-brew.vercel.app/"
            />
            <ProjectTable
              header="ROLE"
              component="Web Developer, Project Manager"
            />{" "}
            <ProjectTable header="TIMELINE" component="3 months" />{" "}
            <ProjectTable header="TOOLS" component="Maya, Next.js, Tailwind" />
          </div>
        </div>
      </div>{" "}
      <ProjectVideo title="/video/distill-set.webm" detail="video/webm" />
      <ProjectText detail=" Introduces Distill's carefully crafted siphon soffee set that includes the buner, paddle, filter, and machine. Information about the item is provided for consumers to explore. As well as 3D rendered examples of the items to demonstrate its use and capabilities." />
      <ProjectVideo title="/video/distill-water.webm" detail="video/webm" />
      <ProjectText detail="Focus on the videos for better comprehension of their functions" />
      <ProjectVideo title="/video/distill-checkout.webm" detail="video/webm" />
      <ProjectText detail="Simple and intuitive checkout process with clear points of actions to complete the process quickly and smoothly." />
      <ProjectVideo title="/video/distill-review.webm" detail="video/webm" />
      <ProjectText detail="This project was developed from start to finish. My team created the company through exploration of siphon machines and produced the assets through 3D models. We adapted our concept to this webstite which challenged us to expland our toolsets to make our assets applicable for the website. We took inspiration from https://teenage.engineering/ and https://cowboy.com/ to create the look and feel of our website. We wanted to provide a trustworthy and professional feel to the website to offer customers a VIP experience." />
      <NextProject link="/projects/coffee" />
    </ScrollEffect>
  );
}
