import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage for the assignment2 website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <h2>Hopefully I will be able to implement a search bar theory using the following code: <code>IDK WHAT YET</code> to search through the
          products as well as the locations</h2>
          <br />
          <h3>Assignment Requirements - Will Be Removed Once They Are Accomplished</h3>
          <ol>
            <li>API Interaction - Demonstrate fetching content from a Headless CMS via RESTful APIs.</li>
            <li>Content Modeling - Structure content types and fields within the Headless CMS to fit the needs of the SSG.</li>
            <li>Data Fetching - Implement fetching strategies for data, build-time, depending on the project's needs.</li>
            <li>Optional for Nextjs CSS Framework Template Design - Leverage modern CSS frameworks like bootstrap, material design to render dynamic content from the Headless CMS.</li>
            <li>Optional Pagination & Filtering - Implement dynamic features like pagination, filtering, and search functionalities that leverage Headless CMS content.</li>
          </ol>
        </main>
    </>
  );
}
