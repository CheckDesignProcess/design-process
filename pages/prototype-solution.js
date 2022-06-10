import Head from "next/head";
import PrototypeSolutionLayout from "../src/layouts/PrototypeSolution";

export default function PrototypeSolution() {
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

      <PrototypeSolutionLayout />
    </div>
  );
}
