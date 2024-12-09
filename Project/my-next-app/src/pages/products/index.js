import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
//import { fetchProductsList } from "../api/products";
import handler from "../api/products";

export async function getStaticProps() {
  const productsList = await handler();
  return {
    props: { productsList }
  };
}

export default function Products({ productsList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(productsList.data.length / productsPerPage);

  // Get the products for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = productsList.data.slice(startIndex, startIndex + productsPerPage);

  // Handle page change
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

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
        <p>Below we will showcase our top selling products that are Available at our many locations.</p>
        {/* Pagination Controls */}
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        {/* Function for product display. */}
        <div className="data-list">
          {paginatedProducts.map((prod, index) => (
            <div key={index} className="data-card">
              <img
                src={`http://localhost:1337${prod?.productImage?.formats?.thumbnail?.url}`}
                alt="Product Thumbnail"
                className="data-image"
              />
              <div className="data-details">
                <h1 className="data-title">{prod.productName}</h1>
                <h3 className="data-price">Price: {prod.productPrice}</h3>
                <h3 className="data-stock">Available: {prod.productStock}</h3>
                <p className="data-description">{prod.productDescription}</p>
                <a href={`/products/${prod.id}`}>View Item</a>
              </div>
            </div>
          ))}
        </div>
         {/* Pagination Controls */}
         <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
      </main>
    </>
  );
}  
