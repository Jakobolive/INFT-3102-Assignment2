import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { fetchLocationsList } from "../../lib/strapi"

export async function getStaticProps() {
    const locationsList = await fetchLocationsList();
    return {
        props: { locationsList }
    }
}
export default function Locations() {
  return (
    <>
      <Head>
        <title>Locations</title>
        <meta name="description" content="Locations page for assignment2." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
        <h3>Check Out Our Locations Below!</h3>

        {locationsList.data.map((loc, index) => (
        <li key={index}>
            <h1>Address: {loc.locationAddress}</h1>
            <h3>Owner: {loc.locationOwner}</h3>
            <h3>Contact Email: {loc.locationEmail}</h3>
            <h3>Contact Phone: {loc.locationPhone}</h3>
            <h3>Opening Date: {loc.locationOpened}</h3>
        </li>
        ))}
        </main>
    </>
    );
}