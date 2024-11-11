import axios from 'axios'

// Grabbing the URL for strapi from the environment.
const STRAPI_URL = process.env.STRAPI_API_URL
// Exporting the products list.
export const fetchProductsList = async () => {
    try{
        const response = await axios.get( STRAPI_URL + "products?populate=productImage")
        return response.data
    }
    catch (error) {
            console.error("Error in fetching productList: " + error)
    }
}
// Exporting the services list.
export const fetchServicesList = async () => {
    try{
        const response = await axios.get( STRAPI_URL + "services")
        return response.data
    }
    catch (error) {
            console.error("Error in fetching servicesList: " + error)
    }
}
// Exporting the locations list.
export const fetchLocationsList = async () => {
    try{
        const response = await axios.get( STRAPI_URL + "locations")
        return response.data
    }
    catch (error) {
            console.error("Error in fetching locationsList: " + error)
    }
}