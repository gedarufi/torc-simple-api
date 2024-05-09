# Torc Test

Simple RESTful API using TypeScript and Node.js. This API will manage a small database (In memory) of real estate listings, enabling users to add a new listing, retrieve all listings, and delete a listing.

### Technology Stack:
- TypeScript
- Node.js
- Express.js

### Data model:
Interface named _**Listing**_ with the following properties:
- _**id:**_ a unique identifier for the listing (string)
- _**title:**_ the title of the real estate listing (string)
- _**price:**_ the price of the listing (number)
- _**description:**_ a brief description of the listing (string)

### API Endpoints:
- Add a New Listing:
  - **[POST]** endpoint `/listings` that allows users to add a new listing. This endpoint accept JSON  object with the follow properties:
  ```
  {
    "title": "Property Title",
    "price": 250000,
    "description": "Property Description"
  }
- Retrieve All Listings:
  - **[GET]** endpoint `/listings` that retrieves all current listings from the in-memory store.
- Delete a Listing:
  - **[DELETE]** endpoint `/listings/:id` where `:id` is the unique identifier of the listing to be deleted. This endpoint should remove the specified listing from the in-memory store.

### Start the project:
To start the project you need to have installed Node JS v20 on your machine, you also need to install the project dependencies using the following command: `npm install`

#### Helpful commands
- Build the project: `npm run build`
- Start the project: `npm run start`
- Start the project in dev mode: `npm run start:dev`
- Run tests: `npm run test`
- Run tests in watch mode: `npm run test:watch`
- Generate test coverage report (reporters html and lcov): `npm run test:cov`
- Generate Open Api Documentation: `npm run generate-types`

