# Contact InfoMinder

This is a real-time project and a Full stack MERN application with React hooks, context and JWT authentication. In this application, you can store and manage you contact details and information by creating your own account with authentication and no one can see the details except you.

## Live Preview

The application is hosted on Heroku

## Highlights

> Custom API or backend built with Express, NodeJS and MongoDB database is used alongwith the frontend built with ReactJS.

## Database Setup

- For database, I used a MongoDB which is a NoSQL Database (Document Database having JSON format).
- For easy setup, I used MongoDB Atlas which is a cloud database.

## Libraries and Frameworks - Dependencies & DevDependencies

### Backend:

- express (Web Framework to handle routing)
- bcryptjs (Hashing our password to make them secure)
- jsonwebtoken (JWT Authentication to access protective routes on the server)
- config (for globle variable on backend)
- express-validator (to validator data in the body like email)
- mongoose (abstraction layer for our DB and to create models)
- nodemon (DevDependency that allow us to keep watching server side changes)
- concurrently (DevDependency that allow us to run backend and frondend at the same time)

### Frontend:

- create-react-app (to install the biolerplate of react)
- axios (library to fetch the http requests and the Custom API)
- @material-ui/core (React UI framework)
- uuid (to generate random keys for development before the integration with backend)
- react-transition-group (for react animations)

All these dependencies are installed by the Node Package Manager (NPM)

## Usage

Install dependencies

```
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

```
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
