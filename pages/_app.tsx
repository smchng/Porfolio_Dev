import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";

import Home from "@/pages/index";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
      <main className={"bg-navy px-[1vw]"}>
        <section>
          <Nav />
        </section>
        <section>{currentPage === "/" && <Home />}</section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
