import Head from "next/head";
import TestSolutionLayout from "../src/layouts/TestSolution";

export default function TestSolution() {
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

      <TestSolutionLayout />
    </div>
  );
}
