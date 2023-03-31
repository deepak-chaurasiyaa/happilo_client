# Happilo Clone

This is a clone of Happilo, a popular e-commerce platform. The project is built using the MERN stack (React, and Node.js and Material UI) along with Redux Toolkit, PostgreSQL, and Git for version control. The project allows users to browse and view the designing and workflow of the happilo clone, and also includes features such as authentication and cart management.

## Disclaimer

This project is created for learning purposes only and is not intended for commercial use. All product names, logos, and brands are property of their respective owners.

If you have any questions or feedback about this project, feel free to contact me at [dchaurasiya8589@gmail.com](mailto:dchaurasiya8589@gmail.com).

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository (https://github.com/deepak-chaurasiyaa/Happilo-clone.git)

2. Install dependencies for both the server and client

3. Create a `.env` file in the `server` folder and add the following variables:

DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database_name>
JWT_SECRET=<jwt_secret_key>

Replace `<username>`, `<password>`, and `<database_name>` with your PostgreSQL credentials. Replace `<jwt_secret_key>` with a secure secret key for JSON Web Tokens.

4. Create the PostgreSQL database
   createdb <database_name>

5. Run database migrations

6. Start the server and client
   cd server
   npm run start

cd ../client
npm start

The server should be running on `http://localhost:3005` and the client on `http://localhost:3000`.

## Features

- User authentication (register, login, logout)
- Browse products by category
- View product details
- Add products to cart
- Remove products from cart
- Checkout and place an order
- Dark and light mode
- Image magnifier
- Send Email for login register and reset password.

## Tech Stack

- React
- Node.js
- Material UI
- Redux Toolkit
- PostgreSQL
- JavaScript
- Express
- Git

## Contributing

Contributions are always welcome! If you'd like to contribute, please fork the repository and create a pull request.
