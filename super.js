const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage for books
let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
];

// Counter for generating unique IDs
let nextId = 4;

// GET /books - Get all books
app.get('/books', (req, res) => {
    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });
});

// GET /books/:id - Get a single book by ID
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    res.status(200).json({
        success: true,
        data: book
    });
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    
    // Validation
    if (!title || !author) {
        return res.status(400).json({
            success: false,
            message: 'Title and author are required'
        });
    }
    
    // Create new book
    const newBook = {
        id: nextId++,
        title: title.trim(),
        author: author.trim()
    };
    
    books.push(newBook);
    
    res.status(201).json({
        success: true,
        message: 'Book added successfully',
        data: newBook
    });
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    
    // Find book index
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    // Validation
    if (!title || !author) {
        return res.status(400).json({
            success: false,
            message: 'Title and author are required'
        });
    }
    
    // Update book
    books[bookIndex] = {
        id: id,
        title: title.trim(),
        author: author.trim()
    };
    
    res.status(200).json({
        success: true,
        message: 'Book updated successfully',
        data: books[bookIndex]
    });
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    // Remove book
    const deletedBook = books.splice(bookIndex, 1)[0];
    
    res.status(200).json({
        success: true,
        message: 'Book deleted successfully',
        data: deletedBook
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Available endpoints:`);
    console.log(`GET    /books     - Get all books`);
    console.log(`GET    /books/:id - Get book by ID`);
    console.log(`POST   /books     - Add new book`);
    console.log(`PUT    /books/:id - Update book by ID`);
    console.log(`DELETE /books/:id - Delete book by ID`);
});

module.exports = app;