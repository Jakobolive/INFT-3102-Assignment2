import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { fetchServicesList } from "../../lib/strapi"

export async function getStaticProps() {
    const servicesList = await fetchServicesList();
    return {
        props: { servicesList }
    }
}

export default function Products() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services page for assignment2." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <h3>Check Out Our Services Provided Below!</h3>

          {servicesList.data.map((serv, index) => (
            <li key={index}>
                <h1>Name: {serv.serviceName}</h1>
                <h3>Service Description: {serv.serviceDesc}</h3>
                <h3>Price: {serv.servicePrice}</h3>
                <h3>Contact: {serv.serviceContact}</h3>
                <h3>Available?: {serv.serviceAvailable}</h3>
            </li>
        ))}
        </main>
    </>
  );
}