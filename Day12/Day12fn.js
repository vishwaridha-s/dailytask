const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Store data in memory
let users = {};

// POST - Add a new user
app.post('/user', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).send('Name and age are required!');
    }
    const id = Date.now(); // simple unique ID
    users[id] = { name, age };
    res.status(201).send(`User added with ID: ${id}`);
});

// PUT - Update user by ID
app.put('/user/:id', (req, res) => {
    const { name, age } = req.body;
    const id = req.params.id;
    if (!users[id]) {
        return res.status(404).send('User not found!');
    }
    users[id] = { name, age };
    res.send(`User with ID ${id} updated!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
