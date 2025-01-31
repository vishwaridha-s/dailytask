const express = require('express');
const mongoose = require('mongoose');
const server = express();
const port = 5001;

server.use(express.json());

const mongoURI = "mongodb+srv://tamil:TS84288@tamilselvan.bkddyqw.mongodb.net/mern?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB Atlas!"))
    .catch(err => console.error("MongoDB connection error:", err));

const CounterSchema = new mongoose.Schema({
    id: String,
    seq: Number,
});

const Counter = mongoose.model('Counter', CounterSchema);

const ItemSchema = new mongoose.Schema({
    _id: Number,
    name: String,
});

const Item = mongoose.model('Item', ItemSchema);

async function getNextSequence(name) {
    const counter = await Counter.findOneAndUpdate(
        { id: name },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    return counter.seq;
}

server.get('/', (req, res) => {
    console.log("Running Tamil!...");
    res.send("Hello, this is the Tamil!");
});

server.get('/user', (req, res) => {
    res.end("This is Tamil's router");
});

server.get('/product', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

server.post('/product', async (req, res) => {
    try {
        const newId = await getNextSequence("items");
        const newItem = new Item({ _id: newId, name: req.body.name });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

server.put('/product/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name },
            { new: true }
        );

        if (updatedItem) {
            res.json(updatedItem);
        } else {
            res.status(404).json("Item Tamil is not found!......Bhai!!..........");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

server.delete('/product/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);

        if (deletedItem) {
            res.json(deletedItem);
        } else {
            res.status(404).json("Item Tamil is not found!......Bhai!!..........");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});