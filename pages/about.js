import Head from "next/head";
import AboutLayout from "../src/layouts/AboutLayout";

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Process Check List</title>
        <meta
          name="description"
          content="A holistic curation of product design processes for your every day product building and process validation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutLayout />
    </div>
  );
}
