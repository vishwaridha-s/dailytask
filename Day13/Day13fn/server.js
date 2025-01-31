const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/foodDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

// Create a schema for User
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

// Example of saving a user
const user = new User({
    name: 'John Doe',
    age: 30
});

user.save()
    .then((doc) => {
        console.log('User saved:', doc);
    })
    .catch((err) => {
        console.error('Error saving user:', err);
    });
