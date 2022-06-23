import React, { useEffect } from "react";
import Head from "next/head";
import HomeLayout from "../src/layouts/HomeLayout";
// import ReactGA from "react-ga";

export default function Home() {
  // ReactGA.initialize("G-YNPLS69455");
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // });
  return (
    <div>
      <Head>
        <title>Process Check List</title>
        <meta
          name="description"
          content="A holistic curation of product design processes for your every day product building and process validation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout />
    </div>
  );
}
