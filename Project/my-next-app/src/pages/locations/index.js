import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { fetchLocationsList } from "../../lib/strapi"

export async function getStaticProps() {
    const locationsList = await fetchLocationsList();
    return {
        props: { locationsList }
    }
}
export default function Locations({ locationsList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const locationsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(locationsList.data.length / locationsPerPage);

  // Get the products for the current page
  const startIndex = (currentPage - 1) * locationsPerPage;
  const paginatedLocations = locationsList.data.slice(startIndex, startIndex + locationsPerPage);

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
        <title>Locations</title>
        <meta name="description" content="Services page for assignment2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Check Out Our Locations Below!</h3>
        <p>Below we will display our locations that are now opened in your neighborhood. Although these locations may not even exist.</p>
        {/* Pagination Controls */}
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        {/* Function for product display. */}
        <div className="data-list">
          {paginatedLocations.map((location, index) => (
            <div key={index} className="data-card">
              <div className="data-details">
                <h1 className="data-title">Address: {location.locationAddress}</h1>
                <h3 className="data-price">Owner: {location.locationOwner}</h3>
                <h3 className="data-stock">Contact Email: {location.locationEmail}</h3>
                <p className="data-description">Contact Phone: {location.locationPhone}</p>
                <p className="data-description">Opened: {location.locationOpened}</p>
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
// import { fetchLocationsList } from "../../lib/strapi"

// export async function getStaticProps() {
//     const locationsList = await fetchLocationsList();
//     return {
//         props: { locationsList }
//     }
// }
// export default function Locations() {
//   return (
//     <>
//       <Head>
//         <title>Locations</title>
//         <meta name="description" content="Locations page for assignment2." />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//         <main className={styles.main}>
//         <h3>Check Out Our Locations Below!</h3>

//         {locationsList.data.map((loc, index) => (
//         <li key={index}>
//             <h1>Address: {loc.locationAddress}</h1>
//             <h3>Owner: {loc.locationOwner}</h3>
//             <h3>Contact Email: {loc.locationEmail}</h3>
//             <h3>Contact Phone: {loc.locationPhone}</h3>
//             <h3>Opening Date: {loc.locationOpened}</h3>
//         </li>
//         ))}
//         </main>
//     </>
//     );
// }