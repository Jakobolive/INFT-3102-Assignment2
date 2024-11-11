import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { fetchProductsList } from "../../lib/strapi"

export async function getStaticProps() {
    const productsList = await fetchProductsList();
    return {
        props: { productsList }
    }
}

export default function Products({ productsList }) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products page for assignment2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <h3>Check Out Our Products Below!</h3>

          {productsList.data.map((prod, index) => (
            <li key={index}>
                <h1>Product: {prod.productName}</h1>
                <h3>Price: {prod.productPrice}</h3>
                <h3>Available: {prod.productStock}</h3>
                <h3>Product Description: {prod.productDescription}</h3>
                <img src={process.env.STRAPI_URL + prod.productImage.formats.thumbnail.url}/>
            </li>
        ))}
        </main>
    </>
  );
}
          
        
