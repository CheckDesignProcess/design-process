import Head from "next/head";
import ShareLayout from "../src/layouts/ShareLayout";

export default function Share() {
  return (
    <div>
      <Head>
        <title>Share | Process Check List</title>
        <meta
          name="description"
          content="A holistic curation of product design processes for your every day product building and process validation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ShareLayout />
    </div>
  );
}
