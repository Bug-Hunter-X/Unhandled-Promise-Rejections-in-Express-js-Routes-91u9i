# Unhandled Promise Rejections in Express.js Routes

This repository demonstrates a common error in Express.js applications: unhandled promise rejections. The bug arises from improper error handling within asynchronous route handlers, specifically when database interactions are involved.

## Bug

The `bug.js` file contains an Express.js route handler that fetches user data from a database.  If the user is not found, it sends a 404 response. However, it lacks proper error handling for cases where the database operation itself fails.

## Solution

The `bugSolution.js` file provides a corrected version of the route handler, using `async/await` to handle potential errors gracefully.  It includes comprehensive error handling to catch database errors and return appropriate HTTP responses. 