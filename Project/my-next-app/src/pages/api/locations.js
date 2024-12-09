import axios from 'axios'

// Grabbing the URL for strapi from the environment.
const STRAPI_URL = process.env.STRAPI_API_URL

// Exporting the locations list.
export default async function handler(request, response) {
    try{
        const response = await axios.get( STRAPI_URL + "locations")
        return response.data
    }
    catch (error) {
            console.error("Error in fetching locationsList: " + error)
    }
}