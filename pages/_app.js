import React, { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  // ReactGA.initialize("G-YNPLS69455");

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <>
      <Head></Head>

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
