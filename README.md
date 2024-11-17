# Next.js App with Strapi Headless CMS

This project is a Next.js application that integrates with a Strapi headless CMS to manage and display data for Products, Locations, and Services on dedicated pages.

## Features

- **Dynamic Content Fetching**: The app fetches data for products, locations, and services from a Strapi CMS.
- **Pagination**: Implements pagination to display a manageable number of items per page.
- **Headless CMS**: Utilizes Strapi for easy content management and API integration.

## Tech Stack

- **Frontend**: Next.js (React Framework)
- **Backend CMS**: Strapi
- **Styling**: Custom CSS imported via `components/style/styles.css`

## Folder Structure

```plaintext
my-next-app/
├── components/
│   ├── footer/
│   │   └── footer.js  
│   ├── header/
│   │   └── header.js 
│   └── style/
│       └── styles.css
├── lib/
│   └── strapi.js    
├── pages/
│   ├── products/
│   │   ├── index.js
│   │   ├── [id].js
│   ├── locations/
│   │   ├── index.js
│   ├── services/
│   │   ├── index.js
│   ├── index.js
│   ├── _document.js
│   └── _app.js
├── public/
├── .env.local
└── README.md
```
# Setup and Installation

## Prerequisites

- **Node.js** (v16+)
- **npm**
- A running Strapi instance with data collections for **Products**, **Locations**, and **Services**

## Steps

1. **Clone the repository**:
2. 
   ```bash
   git clone https://github.com/Jakobolive/INFT-3102-Assignment2.git
   cd my-next-app
   ```
   
3. **Install dependencies**:

   ```bash
   npm install
   ```
## Configure Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```
## Run the Development Server

Run the following command to start the development server:

```bash
npm run dev
```
## API Endpoints

The app fetches data from Strapi's REST API using the following endpoints:

- **Products**: `/products`
- **Locations**: `/locations`
- **Services**: `/services`

> **Note**: Ensure these collections are published in your Strapi instance and accessible via the API.

---

## Key Pages

- **Homepage** (`/`): Introduction or overview of the website.
- **Products** (`/products`): Lists all products with pagination.
- **Locations** (`/locations`): Displays a list of locations with pagination.
- **Services** (`/services`): Provides details about available services with pagination.

---

## Pagination

Pagination is implemented to display a fixed number of items per page.  
You can adjust the number of items by modifying the query in the respective page files, such as:

- `products/[id].js`
- `locations.js`
- `services.js`

---

## Deployment

To deploy the app, follow these steps:

**Build the production-ready app**:

 ```bash
 cd project/my-next-app
 npm run build
 ```
## Start the app:

```bash
npm start
```
## Or 
```bash
npm run dev
```
## To create and open the Strapi instance:

```bash
cd project
npx create-strapi-app@latest my-project --quickstart

cd project/my-strapi-app
npm run develop
```
