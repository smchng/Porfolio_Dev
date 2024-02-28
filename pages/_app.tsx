import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";

import Home from "@/pages/index";
import About from "@/pages/about";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Eunoia from "@/pages/projects/eunoia";
import Caseit from "@/pages/projects/caseit";
import Pivot from "@/pages/projects/pivot";
import Distill from "@/pages/projects/distill";
import Coffee from "@/pages/projects/coffee";
import YVR from "@/pages/projects/yvr";
import Recap from "@/pages/projects/recap";

import Head from "next/head";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Samantha Chung ";

    const handleRouteChange = (url: string) => {
      document.title = "Samantha Chung | " + url;
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const currentPage = router.pathname;
  return (
    <>
      <Head>
        {/* Other head elements */}
        <link rel="icon" type="image/png" href="/imgs/seal.jpg" />
        {/* Other head elements */}
      </Head>
      <main className={"bg-navy"}>
        <section>
          <Nav />
        </section>
        <section className=" px-[1vw]">
          {currentPage === "/" && <Home />}
          {currentPage === "/about" && <About />}
          {currentPage === "/projects/eunoia" && <Eunoia />}
          {currentPage === "/projects/caseit" && <Caseit />}
          {currentPage === "/projects/pivot" && <Pivot />}
          {currentPage === "/projects/coffee" && <Coffee />}
          {currentPage === "/projects/distill" && <Distill />}
          {currentPage === "/projects/yvr" && <YVR />}
          {currentPage === "/projects/recap" && <Recap />}
        </section>
        <section className=" px-[1vw]">
          <Footer />
        </section>
      </main>
    </>
  );
}
