import React from "react";
import Head from "next/head";
import IdeateSolutionLayout from "../src/layouts/IdeateSolution";

export default function IdeateSolution() {
  return (
    <div>
      <Head>
        <title>Ideate Solution | Checkdp</title>
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
        <meta name="keywords" content="Product, Process, Design" />
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
      </Head>

      <IdeateSolutionLayout />
    </div>
  );
}
