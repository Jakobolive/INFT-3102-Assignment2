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
          <h2>Homepage Including Assignment Requirements</h2>
          <br />
          <h3>Assignment Requirements</h3>
          <ol>
            <li>Serverless Functions: You'll write serverless functions using JavaScript or TypeScript. These functions handle backend logic and can interact with APIs, databases, or other services.</li>
            <li>Asynchronous Programming: Managing asynchronous requests and responses, such as fetching data or processing user input..</li>
            <li>Dynamic Content Handling: Incorporating dynamic content fetched by serverless functions into your static site</li>
            <li>State Management: Managing state in your application, especially when dealing with content that changes based on user interaction or external data.</li>
          </ol>
        </main>
    </>
  );
}
