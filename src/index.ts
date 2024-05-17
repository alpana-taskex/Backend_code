// The Express framework and assign it to the 'express' variable
import express from "express";

// Import the HTTP module to create a server and handle HTTP requests
import http from "http";

// Import middleware for parsing request bodies
import bodyParser from "body-parser";

// Import middleware for parsing cookies
import cookieParser from "cookie-parser";

// Import middleware for compressing HTTP responses
import compression from "compression";

// Import middleware for enabling CORS (Cross-Origin Resource Sharing)
import cors from "cors";

// Import Mongoose for MongoDB object modeling
import mongoose from "mongoose";

// Import router for handling routes
import router from "./router";

// Create an instance of the Express application
const app = express();

// Enable CORS (Cross-Origin Resource Sharing) middleware with credentials support
app.use(
  cors({
    credentials: true,
  })
);

// Enable compression middleware to compress HTTP responses
app.use(compression());

// Enable cookie parser middleware to parse cookies from incoming requests
app.use(cookieParser());

// Enable JSON body parser middleware to parse JSON bodies from incoming requests
app.use(bodyParser.json());

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Start the server listening on port 8080
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

// Define the MongoDB connection URL
const MONGO_URL = "mongodb://localhost:27017/";

// Set Mongoose to use native JavaScript promises for async operations
mongoose.Promise = Promise;

// Connect Mongoose to the MongoDB database using the defined URL
mongoose.connect(MONGO_URL);

// Log any errors that occur during the MongoDB connection process
mongoose.connection.on("error", (error: Error) => console.log(error));

// Mount the router middleware to handle requests at the root URL
app.use("/", router());
