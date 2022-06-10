import React from "react";
import Head from "next/head";
import DefineProblemLayout from "../src/layouts/DefineProblem";

export default function DefineProblem() {
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

      <DefineProblemLayout />
    </div>
  );
}
