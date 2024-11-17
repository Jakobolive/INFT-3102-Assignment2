import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { fetchServicesList } from "../../lib/strapi"

export async function getStaticProps() {
    const servicesList = await fetchServicesList();
    return {
        props: { servicesList }
    }
}
export default function Services({ servicesList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(servicesList.data.length / servicesPerPage);

  // Get the products for the current page
  const startIndex = (currentPage - 1) * servicesPerPage;
  const paginatedServices = servicesList.data.slice(startIndex, startIndex + servicesPerPage);

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
        <title>Services</title>
        <meta name="description" content="Services page for assignment2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Check Out Our Services Below!</h3>
        <p>Below we will showcase our top selling Services that are Available. Although there is no information about these services available.</p>
        {/* Pagination Controls */}
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        {/* Function for product display. */}
        <div className="data-list">
          {paginatedServices.map((service, index) => (
            <div key={index} className="data-card">
              <div className="data-details">
                <h1 className="data-title">{service.serviceName}</h1>
                <h3 className="data-price">Price: {service.servicePrice}</h3>
                <h3 className="data-stock">Contact: {service.serviceContact}</h3>
                <p className="data-description">Description: {service.serviceDesc}</p>
                <p className="data-description">Available: {service.serviceAvailable ? "Yes" : "No"}</p>
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
