import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>
          Checkdp - An opensource checklist for teams to validate design process
        </title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/syncteams-co/image/upload/v1655999246/Group_14_xwcm47.svg"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          content="This is an open source project that provides an holistic curation of product design processes for your every day product building and process validation."
          name="description"
        />
        <meta
          name="keywords"
          content="Checkdp, Product, Process, Design, Project, Checklist, New product, Existing product, feature, product building, process validation"
        />
        <meta name="robots" content="index, follow" />
        <meta content="#1B1B1B" name="theme-color" />
        <meta content="Themesdesign" name="author" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/syncteams-co/image/upload/v1655999246/Group_14_xwcm47.svg"
        />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta
          property="og:title"
          content="Checkdp - This is an open source project that provides an holistic curation of product design processes for your every day product building and process validation."
        />
        <meta property="og:url" content="https://checkdp.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This is an open source project that provides an holistic curation of product design processes for your every day product building and process validation."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/syncteams-co/image/upload/v1655999246/Group_14_xwcm47.svg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@holargrapher" />
        <meta
          name="twitter:title"
          content="Checkdp - This is an open source project that provides an holistic curation of product design processes for your every day product building and process validation."
        />
        <meta
          name="twitter:description"
          content="This is an open source project that provides an holistic curation of product design processes for your every day product building and process validation."
        />
        <meta name="twitter:url" content="https://checkdp.com/" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/syncteams-co/image/upload/v1655999246/Group_14_xwcm47.svg"
        />
        <meta name="yandex-verification" content="17e9610e4c720a77" />
        <meta name="msvalidate.01" content="175BC036CA5973530EE8953DAE1DE52D" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Checkdp",
              alternateName:
                "An opensource checklist for teams to validate design process",
              description:
                "Validate your design process and build better products.",
              slogan: "Process, Design, Product",
              image:
                "https://res.cloudinary.com/syncteams-co/image/upload/v1656001829/Frame_1_1_m0vkrb.png",
              logo: "https://res.cloudinary.com/syncteams-co/image/upload/v1656001875/Group_10_artpzy.svg",
              url: "https://checkdp.com/",
              owns: [
                {
                  "@type": "WebSite",
                  name: "Checkdp",
                  url: "https://checkdp.com/",
                  image:
                    "https://res.cloudinary.com/syncteams-co/image/upload/v1656001829/Frame_1_1_m0vkrb.png",
                  description:
                    "This is an open source project that provides an holistic curation of product design processes for your every day product building and process validation",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/in/olamilekan-adeyemi-654249135/",
                "https://twitter.com/holargrapher",
                "https://www.instagram.com/holargrapher/",
              ],
            }),
          }}
        />
      </Head>

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
