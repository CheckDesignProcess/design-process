import Head from "next/head";
import ExistingProductLayout from "../src/layouts/ExistingProduct";

export default function ExistingProduct() {
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

      <ExistingProductLayout />
    </div>
  );
}
