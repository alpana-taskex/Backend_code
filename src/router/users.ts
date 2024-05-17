// Importing Express framework for creating server endpoints
import express from "express";

// Importing controller functions for handling user-related operations
import { getAllUsers, deleteUser, updateUser } from "../controllers/user";

// Importing middleware function for user authentication
import { isAuthenticated, isOwner } from "../middlewares";

// Importing authentication middleware
import authentication from "./authentication";

// Importing the update function from lodash library
import { update } from "lodash";

// Exporting a function that defines routes related to user operations
export default (router: express.Router) => {
  // Define a GET endpoint to retrieve all users, with authentication middleware
  router.get("/users", isAuthenticated, getAllUsers);

  // Define a DELETE endpoint to delete a user by ID
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);

  // Define a PATCH endpoint to update a user by ID
  router.patch(" /users/:id", isAuthenticated, isOwner, updateUser);
}; // End of route definition
