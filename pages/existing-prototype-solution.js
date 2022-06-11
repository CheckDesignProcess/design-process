import Head from "next/head";
import ExistingPrototypeLayout from "../src/layouts/ExistingPrototype";

export default function ExistingPrototype() {
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

      <ExistingPrototypeLayout />
    </div>
  );
}
