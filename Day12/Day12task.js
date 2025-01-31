const express = require('express');
const app = express();
const port = 3000;

// Home Route - Display homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Our Food Website</h1><p>Browse our menu and order now!</p>');
});

// Menu Route - Display menu items
app.get('/menu', (req, res) => {
    res.json([
        { id: 1, name: 'Pizza', price: 12.99 },
        { id: 2, name: 'Burger', price: 8.99 },
        { id: 3, name: 'Pasta', price: 10.99 },
        { id: 4, name: 'Salad', price: 6.99 }
    ]);
});

// About Route - Display about information
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>We serve the best food in town! Fresh ingredients, delicious recipes!</p>');
});

// Contact Route - Display contact info
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: contact@foodwebsite.com | Phone: +123 456 789</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
