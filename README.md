# Internship-Assignments-WP-day3
This repository contains my daily internship assignments and projects.
A simple REST API for managing a collection of books using Node.js and Express.js. This project implements basic CRUD (Create, Read, Update, Delete) operations with in-memory storage.
Features

✅ Get all books
✅ Get a single book by ID
✅ Add a new book
✅ Update an existing book
✅ Delete a book
✅ Input validation
✅ Error handling
✅ Proper HTTP status codes

Technologies Used

Node.js - JavaScript runtime
Express.js - Web application framework
JSON - Data format for API responses

Installation & Setup

Clone the repository

bash   git clone <your-repo-url>
   cd books-rest-api

Initialize the project and install dependencies

bash   npm init -y
   npm install express
   npm install --save-dev nodemon  # Optional for development

Start the server

bash   npm start
   # or for development with auto-restart
   npm run dev

Server will be running on

   http://localhost:3000
API Endpoints
GET /books
Get all books in the collection.
httpGET http://localhost:3000/books
Response:
json{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    }
  ]
}
GET /books/:id
Get a specific book by its ID.
httpGET http://localhost:3000/books/1
POST /books
Add a new book to the collection.
httpPOST http://localhost:3000/books
Content-Type: application/json

{
  "title": "New Book Title",
  "author": "Author Name"
}
PUT /books/:id
Update an existing book by ID.
httpPUT http://localhost:3000/books/1
Content-Type: application/json

{
  "title": "Updated Book Title",
  "author": "Updated Author Name"
}
DELETE /books/:id
Delete a book by ID.
httpDELETE http://localhost:3000/books/1
Testing with Postman

Import the collection or manually create requests for each endpoint
Set the base URL to http://localhost:3000
Test each endpoint:

GET requests don't need a body
POST and PUT requests need JSON body with title and author
DELETE requests only need the ID in the URL



Project Structure
books-rest-api/
├── server.js          # Main application file
├── package.json       # Project configuration and dependencies
└── README.md         # Project documentation
HTTP Status Codes Used

200 - Success (GET, PUT, DELETE)
201 - Created (POST)
400 - Bad Request (Missing required fields)
404 - Not Found (Book doesn't exist)
500 - Internal Server Error

Sample Data
The API starts with 3 sample books:

"The Great Gatsby" by F. Scott Fitzgerald
"To Kill a Mockingbird" by Harper Lee
"1984" by George Orwell

Key Concepts Learned

REST API principles and design
Express.js routing and middleware
HTTP methods (GET, POST, PUT, DELETE)
JSON parsing and response formatting
Error handling and status codes
CRUD operations without database
API testing with Postman
