import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";

import Home from "@/pages/index";
import About from "@/pages/about";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Eunoia from "@/pages/projects/eunoia";

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
        </section>
        <section className=" px-[1vw]">
          <Footer />
        </section>
      </main>
    </>
  );
}
