import React from "react";
import Head from "next/head";
import IdeateSolutionLayout from "../src/layouts/IdeateSolution";

export default function IdeateSolution() {
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

      <IdeateSolutionLayout />
    </div>
  );
}
