import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable, ProjectLink, CombinedTable } from "@/components/table";

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
      <CombinedTable>
        {[
          <div key="child1">
            {" "}
            <ProjectLink
              header="EXT. LINKS"
              title="visit"
              component="https://distill-brew.vercel.app/"
            />
            <ProjectTable
              header="ROLE"
              component="Web Developer, Project Manager"
            />{" "}
          </div>,
          <div key="child2">
            {" "}
            <ProjectTable header="TIMELINE" component="3 months" />{" "}
            <ProjectTable header="TOOLS" component="Maya, Next.js, Tailwind" />
          </div>,
        ]}
      </CombinedTable>

      <ProjectVideo title="/video/distill-set.webm" detail="video/webm" />
      <ProjectText detail=" Introduces Distill's carefully crafted siphon soffee set that includes the buner, paddle, filter, and machine. Information about the item is provided for consumers to explore. As well as 3D rendered examples of the items to demonstrate its use and capabilities." />
      <ProjectVideo title="/video/distill-water.webm" detail="video/webm" />
      <ProjectText detail="Focus on the videos for better comprehension of their functions" />
      <ProjectVideo title="/video/distill-checkout.webm" detail="video/webm" />
      <ProjectText detail="Simple and intuitive checkout process with clear points of actions to complete the process quickly and smoothly." />
      <ProjectVideo title="/video/distill-review.webm" detail="video/webm" />
      <div className="h-[50vh] md:h-screen px-[5vw] lg:px-[5vw] sm:w-[50vw] md:w-[50vw] lg:w-[35vw] flex items-center relative whitespace-normal shrink-0">
        <p>
          {" "}
          This project was developed from start to finish. My team created the
          company through exploration of siphon machines and produced the assets
          through 3D models. We adapted our concept to this website which
          challenged us to expand our toolsets to make our assets applicable for
          the website. We took inspiration from{" "}
          <Link
            href="https://teenage.engineering/"
            target="_blank"
            className="hover:text-white text-blue"
          >
            teenage.engineering
          </Link>{" "}
          and{" "}
          <Link
            href="https://cowboy.com/"
            target="_blank"
            className="hover:text-white text-blue"
          >
            cowboy.com
          </Link>{" "}
          to create the look and feel of our website. We wanted to provide a
          trustworthy and professional feel to the website to offer customers a
          VIP experience.
        </p>
      </div>
      <NextProject link="/projects/yvr" />
    </ScrollEffect>
  );
}
