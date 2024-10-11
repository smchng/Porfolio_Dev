"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

import { CursorProvider, Cursor } from "@/components/cursor";
import Head from "next/head";
import { titleMapping } from "@/content/nav_content";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {/* Other head elements */}
        <link rel="icon" type="image/png" href="/imgs/seal.jpg" />
        {/* Other head elements */}
      </Head>
      <main className={"bg-navy cursor-none "}>
        <CursorProvider>
          <Cursor />
          <section>
            <Nav />
          </section>
          <section className=" px-[1vw]">{children}</section>
          <section className=" px-[1vw]">
            <Footer />
          </section>
        </CursorProvider>
      </main>
    </>
  );
}
